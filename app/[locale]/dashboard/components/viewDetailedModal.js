"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

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
        }
      );
      const data = new Uint8Array([response?.data]);
      const blob = new Blob([data]);
      const url = URL.createObjectURL(blob);
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
        toast.error(t("ErrorOperation"));
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
                Ad
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
                Soyad
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
                Elektron poçt ünvanı
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
                Əlaqə nömrəsi
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
                Passport nömrəsi
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
                FİN
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
                Doğum tarixi
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
                {selectedId.dateOfBirth || t("noText")}
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
                Ölkə kodu
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
                Milliyət
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
                Cinsi
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
                {selectedId.gender === 1
                  ? "Kişi"
                  : selectedId.gender === 2
                  ? "Qadın"
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
                Passportun verilmə tarixi
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
                {selectedId.passportDateOfIssue || t("noText")}
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
                Passportun etibarlılıq müddəti
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
                {selectedId.passportDateOfExpiry || t("noText")}
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
                Müraciətçi yetkinlik yaşına çatmış şəxsdir?
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
                {selectedId.isAdult ? "Bəli" : "Xeyr"}
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
                    <h5> Nümayəndə haqqında məlumat:</h5>
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
                    Adı
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
                    Soyadı
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
                    Elektron poçt ünvanı
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
                    Əlaqə nömrəsi
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
                    Ünvanı
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
                Avropa vətəndaşı olan qohumunuz var?
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
                {selectedId.hasEuropeanFamilyMember ? "Bəli" : "Xeyr"}
              </Col>
            </Row>

            {selectedId.hasEuropeanFamilyMember && (
              <div>
                <Row className="py-2">
                  <Col
                    xs={6}
                    className="font-italic p-1"
                    style={{ marginTop: "1rem" }}
                  >
                    <h5>Avropa vətəndaşı olan qohum haqqında məlumat:</h5>
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
                    Digər ölkə vətəşdaşlığı məlumatı
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
                    Adı
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
                    Soyadı
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
                    Passport faylı
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
                        Passport faylı
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
                <h5> Sənədlər - ({selectedId.visaDocuments?.length})</h5>
              </Col>
            </Row>

            {selectedId.visaDocuments?.length > 0 && (
              <>
                <Row>
                  <Table size="sm" responsive>
                    <thead>
                      <tr>
                        <th>Sənəd növü</th>
                        <th>Təsdiqlənmə statusu</th>
                        <th>URL</th>
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
                              ? "Bəli"
                              : item.isConfirmed === false
                              ? "Xeyr"
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
          <div>Loading...</div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ViewDetailedModal;
