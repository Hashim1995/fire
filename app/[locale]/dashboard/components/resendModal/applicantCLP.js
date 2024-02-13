"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPlus, BiTrash } from "react-icons/bi";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Table,
} from "reactstrap";
import AddFileToApplicantModal from "./addFileToApplicantModal";
import { DocumentTypes, getEnumLabel } from "../options";
import { useSession } from "next-auth/react";
import axios from "axios";

const ApplicantCLP = ({
  applicant,
  rootSetValue,
  rootWatch,
  rootgetValues,
  setRemovedDocsFromBack,
}) => {
  const [modal, setModal] = useState(false);

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
  const session = useSession();
  const token = session?.data?.user?.data?.token;

  const downloadFileFromServer = async (param) => {
    try {
      const response = await axios.post(
        "https://ivisaapp.azurewebsites.net/api/v1/visa/required-documents/download",
        { documentUri: param },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const a = document.createElement("a");
      a.download = param;
      a.href = response.data;
      a.click();
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

  const dowloadFile = (file) => {
    if (typeof file === "string") {
      downloadFileFromServer(file);
      return;
    } else {
      console.log(file, "hashim");
      const a = document.createElement("a");
      a.download = file?.fileName;
      a.href = file?.file;
      a.click();
    }
  };

  useEffect(() => {
    applicant?.visaDocuments?.map((aplcnt) => {
      const prev = watch("list");
      const prevRoot = rootWatch(`${applicant?.id}`);
      const payload = {
        documentType: aplcnt?.documentType,
        file: aplcnt?.uri,
        id: aplcnt?.id,
        clientId: self.crypto.randomUUID(),
        isConfirmed: aplcnt?.isConfirmed,
        isBack: true,
      };
      setValue("list", [...prev, payload]);
      rootSetValue(`${applicant?.id}`, [...prevRoot, payload]);
    });
  }, [applicant]);

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
        <Table size="sm" bordered striped responsive hover>
          <thead>
            <tr>
              <th textTransform="initial">SƏNƏDİN ADI</th>
              <th textTransform="initial">SƏNƏD</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {watch("list")?.map((z) => (
              <tr>
                <td>
                  {z?.documentType?.label ||
                    getEnumLabel(DocumentTypes, z?.documentType)}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    maxWidth: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => dowloadFile(z?.file)}
                  className=" text-primary pointer-event"
                >
                  {z?.file?.fileName || z?.file}
                </td>
                <td className="text-center">
                  <Button
                    disabled={z?.isConfirmed}
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
                      if (z?.isBack) {
                        setRemovedDocsFromBack((prev) => [...prev, z]);
                      }
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
