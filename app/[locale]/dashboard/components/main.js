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
import { VisaLevels, getEnumLabel } from "./options";
import ProvideModal from "./provideModal/provideModal";
import ResendModal from "./resendModal/resendModal";
import PaymentTypeModal from "./paymentTypeModal";
import Pagination from "./Pagination/Pagination";
import ViewModal from "./viewModal";
import { MdRefresh } from "react-icons/md";

const Main = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [skeleton, setSkeleton] = useState(true);
  const [showProvideModal, setShowProvideModal] = useState(false);
  const [showResendModal, setShowResendModal] = useState(false);
  const [showPaymentTypeModal, setShowPaymentTypeModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [visaAppointmentId, setVisaAppointmentId] = useState(null);
  const [totalDataCount, setTotalDataCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [visaRequests, setVisaRequests] = useState();
  const session = useSession();
  const t = useTranslations();

  const fetchData = async () => {
    setSkeleton(true);

    const token = session?.data?.user?.data?.token;
    try {
      const response = await axios.get(
        `https://ivisavmlinux.azurewebsites.net/api/v1/visa?page=${currentPage}`,
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

  const getBadgeColor = (statusId) => {
    switch (statusId) {
      case 1:
        return "secondary";
      case 2:
        return "primary";
      case 3:
        return "info";
      case 4:
        return "light";
      case 5:
        return "success";
      case 6:
        return "danger";
      case 7:
        return "warning";
      case 8:
        return "dark";
      default:
        return "secondary";
    }
  };

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
              <span>{t("visaApplies")}</span>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="d-flex gap-2 items-center">
            <Button outline onClick={() => setRefreshComponent((z) => !z)}>
              <MdRefresh size={20} />
            </Button>
            <Button
              onClick={() => setShowAddModal((z) => !z)}
              className="theme-btn border-0 rounded-0 btn-style-one"
            >
              <span className="btn-title text-white">{t("add")}</span>
            </Button>
          </div>
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
                          <th textTransform="initial">{t("applicant")}</th>

                          <th textTransform="initial">{t("countryToGo")}</th>
                          <th textTransform="initial">
                            {t("dateOfDeparture")}
                          </th>
                          <th textTransform="initial">{t("dateOfArrival")}</th>
                          <th textTransform="initial">{t("operatorName")}</th>
                          <th textTransform="initial">
                            {t("operatorPhoneNumber")}
                          </th>
                          <th
                            style={{ textAlign: "center" }}
                            textTransform="initial"
                          >
                            {t("visaStatus")}
                          </th>

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
                              {item?.operator
                                ? `${item?.operator?.firstname} ${item?.operator?.lastname}`
                                : "-"}
                            </td>
                            <td>
                              {item?.operator?.phoneNumber
                                ? item?.operator?.phoneNumber
                                : "-"}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {" "}
                              {item?.visaLevel ? (
                                <Badge
                                  className={`${
                                    item.visaLevel == 4 ? "text-dark" : ""
                                  }`}
                                  color={getBadgeColor(item.visaLevel)}
                                >
                                  {item?.visaLevelText}
                                </Badge>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="text-center">
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
                                      {t("provideDocs")}
                                    </DropdownItem>
                                  )}
                                  {item?.visaLevel === 7 && (
                                    <DropdownItem
                                      onClick={() => {
                                        setSelectedItem(item);
                                        setShowResendModal(true);
                                      }}
                                    >
                                      {t("reUploadDocs")}
                                    </DropdownItem>
                                  )}

                                  {item?.visaLevel === 8 && (
                                    <DropdownItem
                                      onClick={() => {
                                        setVisaAppointmentId(item?.id);
                                        setShowPaymentTypeModal(true);
                                      }}
                                    >
                                      {t("repeatPayment")}
                                    </DropdownItem>
                                  )}
                                  <DropdownItem
                                    onClick={() => {
                                      setSelectedItem(item);
                                      setShowViewModal(true);
                                    }}
                                  >
                                    {t("detailedView")}
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <br />
                  </>
                ) : (
                  <Table size="sm" bordered striped responsive hover>
                    <thead>
                      <tr>
                        <th textTransform="initial">{t("applicant")}</th>

                        <th textTransform="initial">{t("countryToGo")}</th>
                        <th textTransform="initial">{t("dateOfDeparture")}</th>
                        <th textTransform="initial">{t("dateOfArrival")}</th>
                        <th textTransform="initial">{t("visaStatus")}</th>
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
          setRefreshComponent={setRefreshComponent}
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
          setRefreshComponent={setRefreshComponent}
          visaAppointmentId={visaAppointmentId}
          setShowPaymentTypeModal={setShowPaymentTypeModal}
        />
      )}
      {showViewModal && (
        <ViewModal
          selectedId={selectedItem}
          showViewModal
          setShowViewModal={setShowViewModal}
        />
      )}
    </div>
  );
};

export default Main;
