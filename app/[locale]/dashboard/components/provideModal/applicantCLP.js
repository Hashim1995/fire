"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiPlus, BiTrash } from "react-icons/bi";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Input,
  Label,
  Table,
} from "reactstrap";
import AddFileToApplicantModal from "./addFileToApplicantModal";
import { useTranslations } from "next-intl";

const ApplicantCLP = ({
  applicant,
  rootSetValue,
  rootWatch,
  rootgetValues,
}) => {
  const [modal, setModal] = useState(false);
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      list: [],
    },
  });

  const dowloadFile = (file) => {
    const a = document.createElement("a");
    a.download = file?.fileName;
    a.href = file?.file;
    a.click();
  };

  return (
    <AccordionItem className="mb-3">
      <AccordionHeader targetId={applicant?.id}>
        <div className="d-flex align-items-center justify-content-between w-100 me-4">
          <div>
            {`${applicant?.firstname} ${applicant?.lastname} (${applicant?.passportNo})`}
          </div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setModal(true);
            }}
            outline
            color="primary"
          >
            <BiPlus />
          </Button>
        </div>
      </AccordionHeader>
      <AccordionBody className="p-0" accordionId={applicant?.id}>
        <div className="row mb-2">
          <div className="col-sm-4 ">
            <div className=" d-flex align-items-center  h-100">
              <Label>{t("meetDate")}</Label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className=" d-flex  align-items-center h-100">
              <Input
                value={applicant?.meetingDate || t("noText")}
                disabled
                className="form-control"
              />
            </div>
          </div>
        </div>
        <Table size="sm" bordered striped responsive hover>
          <thead>
            <tr>
              <th textTransform="initial">{t("nameOfDocument")}</th>
              <th textTransform="initial">{t("document")}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {watch("list")?.map((z) => (
              <tr>
                <td>{z?.documentType?.label}</td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => dowloadFile(z?.file)}
                  className=" text-primary pointer-event"
                >
                  {z?.file?.fileName}
                </td>
                <td className="text-center">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setValue(
                        "list",
                        getValues().list?.filter(
                          (d) => z?.clientId !== d?.clientId
                        )
                      );

                      rootSetValue(
                        `${applicant?.id}`,
                        rootgetValues()[applicant?.id]?.filter(
                          (d) => z?.clientId !== d?.clientId
                        )
                      );
                    }}
                    outline
                    color="danger"
                  >
                    <BiTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AccordionBody>

      {modal && (
        <AddFileToApplicantModal
          parentSetter={setValue}
          parentWatch={watch}
          rootSetValue={rootSetValue}
          modal={modal}
          setModal={setModal}
          applicant={applicant}
          rootWatch={rootWatch}
        />
      )}
    </AccordionItem>
  );
};

export default ApplicantCLP;
