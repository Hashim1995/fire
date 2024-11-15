"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { format, parseISO, parse } from "date-fns";

import { toast } from "react-toastify";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Table,
  Container,
  Row,
  Col,
  Spinner,
  Badge,
} from "reactstrap";
import {
  VisaCategories,
  VisaLevels,
  countriesStatic,
  getEnumLabel,
  validateDates,
} from "./options";
import { returnCurrentLangId } from "@/utils/currentLang";
import { useParams } from "next/navigation";
import ViewDetailedModal from "./viewDetailedModal";

const ViewModal = ({ setShowViewModal, showViewModal, selectedId }) => {
  const t = useTranslations();
  const [showViewDetailedModal, setShowViewDetailedModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState();

  return (
    <Modal
      className="modal-dialog-centered"
      size="lg"
      centered
      backdrop="static"
      scrollable={true}
      style={{ maxWidth: "1100px", width: "100%" }}
      isOpen={showViewModal}
      toggle={() => setShowViewModal((z) => !z)}
    >
      <ModalHeader toggle={() => setShowViewModal((z) => !z)}>
        {t("View")}
      </ModalHeader>
      <ModalBody>
        {selectedId ? (
          <Container>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("visaCategory")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {getEnumLabel(VisaCategories, 1) || t("noText")}
              </Col>
            </Row>

            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("VisaType")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId?.visaType === 1
                  ? t("visaTypeSingle")
                  : selectedId?.visaType === 2
                  ? t("visaTypeMulti")
                  : t("noText")}
              </Col>
            </Row>

            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("DestinationCountryId")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId.country?.title || t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("EntryCountry")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {getEnumLabel(countriesStatic, selectedId.entryCountry) ||
                  t("noText")}
              </Col>
            </Row>

            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("DepartureDate")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId.departureDate || t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("ReturnDate")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId.returnDate || t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("passportType")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId?.travelDocumentType || t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("applicant")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId.customer?.firstname
                  ? `${selectedId.customer.firstname} ${selectedId.customer.lastname}`
                  : t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("email")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId.customer?.email || t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("paymentType")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId?.paymentType === 1
                  ? t("paymentTypeSimple")
                  : selectedId?.paymentType === 2
                  ? t("paymentTypeComplex")
                  : t("noText")}
              </Col>
            </Row>

            {selectedId?.extraOptions?.length ? (
              <Row>
                <Col
                  xs={6}
                  className="p-2"
                  style={{
                    color: "#6B7280",
                    borderRadius: "4px",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {t("additionalOptions")}
                </Col>
                <Col
                  xs={6}
                  style={{
                    fontSize: "16px",
                    color: "#333333",
                  }}
                >
                  <div className=" d-inline gap-1">
                    {selectedId?.extraOptions?.map((z) => (
                      <Badge
                        key={z?.id}
                        style={{ margin: "2px" }}
                        color="secondary"
                      >
                        {z?.title || t("noText")}
                      </Badge>
                    ))}
                  </div>
                </Col>
              </Row>
            ) : null}
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("totalPrice")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {selectedId.totalPrice
                  ? `${selectedId.totalPrice} AZN`
                  : t("noText")}
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#6B7280",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {t("visaStatus")}
              </Col>
              <Col
                xs={6}
                className="p-2"
                style={{
                  color: "#1F2937",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "start",
                }}
              >
                {getEnumLabel(VisaLevels, selectedId.visaLevel) || t("noText")}
              </Col>
            </Row>

            <br />
            <Row className="py-1">
              <Col
                xs={6}
                className="font-italic p-1"
                style={{ marginTop: "1rem" }}
              >
                <h5>
                  {" "}
                  {t("applicants")} - ({selectedId?.visaApplicants?.length})
                </h5>
              </Col>
            </Row>
            {selectedId?.visaApplicants?.length > 0 && (
              <>
                <Row>
                  <Table size="sm" responsive>
                    <thead>
                      <tr>
                        <th>{t("Name")}</th>
                        <th>{t("Lastname")}</th>
                        <th>{t("Email")}</th>
                        <th>{t("PhoneNumber")}</th>
                        <th>{t("passportCode")}</th>
                        <th>{t("finCode")}</th>
                        <th>{t("Birthday")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedId.visaApplicants.map((item) => (
                        <tr
                          key={item.id}
                          onClick={() => {
                            setSelectedPerson(item);
                            setShowViewDetailedModal(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.email}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.passportNo}</td>
                          <td>{item.personalNo}</td>
                          <td>
                            {item.dateOfBirth
                              ? format(parseISO(item.dateOfBirth), "dd.MM.yyyy")
                              : ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </>
            )}
          </Container>
        ) : (
          <Spinner />
        )}
      </ModalBody>
      {showViewDetailedModal && (
        <ViewDetailedModal
          selectedId={selectedPerson}
          showViewDetailedModal
          setShowViewDetailedModal={setShowViewDetailedModal}
        />
      )}
    </Modal>
  );
};

export default ViewModal;
