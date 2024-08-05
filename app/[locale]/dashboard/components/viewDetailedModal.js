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
} from "reactstrap";
import {
  DocumentTypes,
  VisaCategories,
  VisaLevels,
  countriesStatic,
  getEnumLabel,
  validateDates,
} from "./options";
import { returnCurrentLangId } from "@/utils/currentLang";
import { useParams } from "next/navigation";

const ViewDetailedModal = ({
  setShowViewDetailedModal,
  showViewDetailedModal,
  selectedId,
}) => {
  const t = useTranslations();
  const session = useSession();
  const token = session?.data?.user?.data?.token;

  const downloadFileFromServer = async (param) => {
    try {
      const response = await axios.get(
        `https://ivisavmlinux.azurewebsites.net/api/v1/visa/required-documents/download/${param}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob", // Set responseType to 'blob' to handle binary data correctly
        }
      );

      // Since response.data is already a blob, you don't need to convert it
      const url = URL.createObjectURL(response.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = param; // Specify the filename here
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      if (Array.isArray(error?.response?.data?.messages)) {
        error?.response?.data?.messages?.map((z) => {
          toast.error(z);
        });
      } else {
        toast.error("ErrorOperation"); // Assuming t is a translation function you've defined elsewhere
      }
    }
  };
  return (
    <Modal
      className="modal-dialog-centered"
      size="lg"
      centered
      backdrop="static"
      scrollable={true}
      style={{ maxWidth: "1100px", width: "100%" }}
      isOpen={showViewDetailedModal}
      toggle={() => setShowViewDetailedModal((z) => !z)}
    >
      <ModalHeader toggle={() => setShowViewDetailedModal((z) => !z)}>
        {t("View")} -
        {` ${selectedId?.firstname}
                          ${selectedId?.lastname}`}
      </ModalHeader>
      <ModalBody>
        {selectedId ? (
          <Container>
            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("Name")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",

                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.firstname || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("Lastname")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.lastname || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("email")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.email || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("contactNumber")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.phoneNumber || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("passportCode")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.passportNo || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("finCode")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.personalNo || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("dateOfBirth")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.dateOfBirth
                  ? format(parseISO(selectedId.dateOfBirth), "dd.MM.yyyy")
                  : t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("countryCode")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.countryCode || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("nationality")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.nationality || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("gender")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.gender
                  ? selectedId.gender
                  : selectedId.gender === 1
                  ? t("male")
                  : selectedId.gender === 2
                  ? t("female")
                  : t("noText")}
              </Col>
            </Row>
            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("passportFile")}
              </Col>
              <Col
                xs="6"
                onClick={() =>
                  selectedId.passportUri &&
                  downloadFileFromServer(selectedId.passportUri)
                }
                style={{
                  color: selectedId.passportUri ? "blue" : "#333333",
                  fontSize: "16px",
                  cursor: "pointer",
                  maxWidth: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.passportUri || t("noText")}
              </Col>
            </Row>
            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("passportDateOfIssue")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.passportDateOfIssue
                  ? format(
                      parseISO(selectedId.passportDateOfIssue),
                      "dd.MM.yyyy"
                    )
                  : t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("passportDateOfExpiry")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.passportDateOfExpiry
                  ? format(
                      parseISO(selectedId.passportDateOfExpiry),
                      "dd.MM.yyyy"
                    )
                  : t("noText")}
              </Col>
            </Row>
            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("meetDate")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.meetingDate || t("noText")}
              </Col>
            </Row>

            <Row className="mb-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("isApplicantAdult")}
              </Col>
              <Col
                xs="6"
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.isAdult ? t("yes") : t("no")}
              </Col>
            </Row>
            <Row className="py-2">
              <Col
                xs="6"
                className="font-italic p-1"
                style={{
                  color: "#333333",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "#cbcbcb99",
                }}
              >
                {t("doYouHaveEuropeanRelative")}
              </Col>
              <Col
                xs={6}
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {selectedId.hasEuropeanFamilyMember ? t("yes") : t("nope")}
              </Col>
            </Row>

            {!selectedId.isAdult && (
              <div>
                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{ marginTop: "1rem" }}
                  >
                    <h5> {t("infoAboutRepresentative")}:</h5>
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs="6"
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("Name")}
                  </Col>
                  <Col
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.representative?.firstname || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs="6"
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("Lastname")}
                  </Col>
                  <Col
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.representative?.lastname || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs="6"
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("Email")}
                  </Col>
                  <Col
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.representative?.email || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs="6"
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("contactNumber")}
                  </Col>
                  <Col
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.representative?.phoneNumber || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs="6"
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("address")}
                  </Col>
                  <Col
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.representative?.address || t("noText")}
                  </Col>
                </Row>
              </div>
            )}

            {selectedId.hasEuropeanFamilyMember && (
              <div>
                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{ marginTop: "1rem" }}
                  >
                    <h5>{t("infoAboutEuropeanRelative")}:</h5>
                  </Col>
                </Row>

                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("infoAboutOtherCountry")}
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.otherCountryResidenceInformation || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {"Name"}
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.europeanFamilyMember?.firstname || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("Lastname")}
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.europeanFamilyMember?.lastname || t("noText")}
                  </Col>
                </Row>
                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{
                      color: "#333333",
                      borderRadius: "4px",
                      fontSize: "16px",
                      backgroundColor: "#cbcbcb99",
                    }}
                  >
                    {t("passportFile")}
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      fontSize: "16px",
                      color: "#333333",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {selectedId.europeanFamilyMember?.passportUri ? (
                      <Col
                        xs={6}
                        onClick={() =>
                          downloadFileFromServer(
                            selectedId.europeanFamilyMember.passportUri
                          )
                        }
                        className="font-italic p-1"
                        style={{
                          color: "blue",
                          fontSize: "16px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {t("passportFile")}
                      </Col>
                    ) : (
                      t("noText")
                    )}
                  </Col>
                </Row>
              </div>
            )}
            <br />
            <Row className="py-1">
              <Col
                xs={6}
                className="font-italic p-1"
                style={{ marginTop: "1rem" }}
              >
                <h5>
                  {" "}
                  {t("Documentation")} - ({selectedId.visaDocuments?.length})
                </h5>
              </Col>
            </Row>

            {selectedId.visaDocuments?.length > 0 && (
              <>
                <Row>
                  <Table size="sm" responsive>
                    <thead>
                      <tr>
                        <th>{t("documentType")}</th>
                        <th>{t("approveStatus")}</th>
                        <th>{t("url")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedId.visaDocuments?.map((item) => (
                        <tr key={item.id} style={{ verticalAlign: "middle" }}>
                          <td style={{ verticalAlign: "middle" }}>
                            {getEnumLabel(DocumentTypes, item?.documentType) ||
                              t("noText")}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {item.isConfirmed === true
                              ? t("yes")
                              : item.isConfirmed === false
                              ? t("no")
                              : t("noText")}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <p
                              onClick={() => downloadFileFromServer(item?.uri)}
                              style={{
                                color: "blue",
                                fontSize: "16px",
                                cursor: "pointer",
                                maxWidth: "200px",
                              }}
                            >
                              {item?.uri}
                            </p>
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
    </Modal>
  );
};

export default ViewDetailedModal;
