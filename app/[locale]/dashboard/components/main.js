"use client";
import {
  Card,
  CardHeader,
  DropdownToggle,
  Table,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import Link from "next/link";
import { BiHome, BiPencil, BiVerticalCenter } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import AddModal from "./addmodal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import axios from "axios";
import { VisaLevels, VisaStatuses, getEnumLabel } from "./options";
import ProvideModal from "./provideModal/provideModal";
import ResendModal from "./resendModal/resendModal";
import PaymentTypeModal from "./paymentTypeModal";
import Pagination from "./Pagination/Pagination";

const Main = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [skeleton, setSkeleton] = useState(true);
  const [showProvideModal, setShowProvideModal] = useState(false);
  const [showResendModal, setShowResendModal] = useState(false);
  const [showPaymentTypeModal, setShowPaymentTypeModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [visaAppointmentId, setVisaAppointmentId] = useState(null);
  const [totalDataCount, setTotalDataCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [visaRequests, setVisaRequests] = useState();
  const session = useSession();
  const t = useTranslations();

  const fetchData = async () => {
    const token = session?.data?.user?.data?.token;
    try {
      const response = await axios.get(
        `https://ivisaapp.azurewebsites.net/api/v1/visa?page=${currentPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data?.succeeded) {
        setVisaRequests(response?.data?.data);
        setTotalDataCount(response?.data?.data?.totalDataCount);
      }
      setSkeleton(false);
    } catch (error) {
      if (Array.isArray(error?.response?.data?.messages)) {
        error?.response?.data?.messages?.map((z) => {
          toast.error(z);
        });
      } else {
        toast.error(t("ErrorOperation"));
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshComponent, currentPage]);
  return (
    <div className="p-5">
      <div className="col-12 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href={"/"}>
                <BiHome size={15} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span>Viza müraciətləri</span>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button
            onClick={() => setShowAddModal((z) => !z)}
            className="theme-btn border-0 rounded-0 btn-style-one"
          >
            <span className="btn-title text-white">Əlavə et</span>
          </Button>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            {!skeleton ? (
              <div className="min-height-table">
                {visaRequests?.data?.length > 0 ? (
                  <>
                    <Table size="sm" bordered striped responsive hover>
                      <thead>
                        <tr>
                          <th textTransform="initial">MÜRACİƏTÇİ</th>

                          <th textTransform="initial">GEDİLƏCƏK ÖLKƏ</th>
                          <th textTransform="initial">GEDİŞ TARİXİ</th>
                          <th textTransform="initial">GERİ DÖNÜŞ TARİXİ</th>
                          <th textTransform="initial">VİZA STATUSU</th>
                          <th textTransform="initial">MƏRHƏLƏ STATUSU</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {visaRequests?.data?.map((item) => (
                          <tr className="monitoringTableTr" key={item?.id}>
                            <td>
                              {item?.customer?.firstname
                                ? `${item?.customer?.firstname} ${item?.customer?.lastname}`
                                : "-"}
                            </td>

                            <td>{item?.country?.title || "-"}</td>
                            <td>{item?.departureDate || "-"}</td>
                            <td>{item?.returnDate || "-"}</td>
                            <td>
                              {getEnumLabel(VisaStatuses, item?.visaStatus) ||
                                "-"}
                            </td>
                            <td>
                              {getEnumLabel(VisaLevels, item?.visaLevel) || "-"}
                            </td>
                            <td className="text-center">
                              {item?.visaLevel === 3 ||
                              item?.visaLevel === 7 ||
                              item?.visaLevel === 8 ? (
                                <UncontrolledDropdown>
                                  <DropdownToggle
                                    style={{
                                      background: "transparent",
                                      color: "black",
                                      border: "none",
                                    }}
                                  >
                                    <FaEllipsisV />
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    {item?.visaLevel === 3 && (
                                      <DropdownItem
                                        onClick={() => {
                                          setSelectedItem(item);
                                          setShowProvideModal(true);
                                        }}
                                      >
                                        Sənədləri təmin et
                                      </DropdownItem>
                                    )}
                                    {item?.visaLevel === 7 && (
                                      <DropdownItem
                                        onClick={() => {
                                          setSelectedItem(item);
                                          setShowResendModal(true);
                                        }}
                                      >
                                        Sənədləri yenidən yüklə
                                      </DropdownItem>
                                    )}

                                    {item?.visaLevel === 8 && (
                                      <DropdownItem
                                        onClick={() => {
                                          setVisaAppointmentId(item?.id);
                                          setShowPaymentTypeModal(true);
                                        }}
                                      >
                                        Ödənişi təkrarla
                                      </DropdownItem>
                                    )}
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              ) : null}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <br />
                    {/* <Pagination
                                        align="end"
                                        className="pagination-bar"
                                        //   setCurrentPage={setCurrentPage}
                                        totalCount={20}
                                        pageSize={10}
                                    // onPageChange={page => setCurrentPage(page)}
                                    /> */}
                  </>
                ) : (
                  <Table size="sm" bordered striped responsive hover>
                    <thead>
                      <tr>
                        <th textTransform="initial">MÜRACİƏTÇİ</th>

                        <th textTransform="initial">GEDİLƏCƏK ÖLKƏ</th>
                        <th textTransform="initial">GEDİŞ TARİXİ</th>
                        <th textTransform="initial">GERİ DÖNÜŞ TARİXİ</th>
                        <th textTransform="initial">VİZA STATUSU</th>
                        <th textTransform="initial">MƏRHƏLƏ STATUSU</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </Table>
                )}
              </div>
            ) : (
              <div
                style={{ padding: "1.5rem 1.5rem" }}
                className="d-flex align-items-center justify-content-center"
              >
                <Spinner />
              </div>
            )}
            <Pagination
              align="end"
              className="pagination-bar"
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalCount={totalDataCount}
              pageSize={10}
              onPageChange={(page) => {
                setCurrentPage(page);
                setSkeleton(!skeleton);
              }}
            />
          </div>
        </div>
      </div>
      {showAddModal && (
        <AddModal
          setShowPaymentTypeModal={setShowPaymentTypeModal}
          setVisaAppointmentId={setVisaAppointmentId}
          modal={showAddModal}
          setModal={setShowAddModal}
        />
      )}
      {showProvideModal && (
        <ProvideModal
          selectedItem={selectedItem}
          modal={showProvideModal}
          setModal={setShowProvideModal}
          setRefreshComponent={setRefreshComponent}
        />
      )}
      {showResendModal && (
        <ResendModal
          selectedItem={selectedItem}
          modal={showResendModal}
          setModal={setShowResendModal}
          setRefreshComponent={setRefreshComponent}
        />
      )}

      {showPaymentTypeModal && (
        <PaymentTypeModal
          showPaymentTypeModal
          visaAppointmentId={visaAppointmentId}
          setShowPaymentTypeModal={setShowPaymentTypeModal}
        />
      )}
    </div>
  );
};

export default Main;
