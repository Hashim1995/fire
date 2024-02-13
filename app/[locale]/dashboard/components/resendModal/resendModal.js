"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  UncontrolledAccordion,
} from "reactstrap";
import ApplicantCLP from "./applicantCLP";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const ResendModal = ({
  setModal,
  modal,
  selectedItem,
  setRefreshComponent,
}) => {
  const [loading, setLoading] = useState(false);
  const [removedDocsFromBack, setRemovedDocsFromBack] = useState([]);

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
    defaultValues: {},
  });
  const t = useTranslations();
  const session = useSession();

  useEffect(() => {
    selectedItem?.visaApplicants?.map((z) => setValue(`${z?.id}`, []));
    console.log(selectedItem, "test1");
  }, [selectedItem]);

  const submitHandler = async () => {
    setLoading(true);
    const jsonData = getValues();
    const formData = new FormData();
    let index = 0;
    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        const documents = jsonData[key];
        documents.forEach((document) => {
          formData.append(`RequiredDocuments[${index}].applicantId`, key);
          formData.append(
            `RequiredDocuments[${index}].documentType`,
            JSON.stringify(document.documentType.value)
          );
          formData.append(
            `RequiredDocuments[${index}].document`,
            document.file.orjinalFile
          );
          index++;
        });
      }
    }

    const token = session?.data?.user?.data?.token;

    try {
      // Replace 'your_api_endpoint' with your actual API endpoint
      const response = await axios.post(
        "https://ivisaapp.azurewebsites.net/api/v1/visa/required-documents/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle response here
      console.log(response.data, "nizami");
      toast.success(t("SuccessOperation"));
      setRefreshComponent((z) => !z);
      setModal(false);
    } catch (error) {
      if (Array.isArray(error?.response?.data?.messages)) {
        error?.response?.data?.messages?.map((z) => {
          toast.error(z);
        });
      } else {
        toast.error(t("ErrorOperation"));
      }
    }
    setLoading(false);
  };
  return (
    <Modal
      className="modal-dialog-centered"
      size="lg"
      centered
      backdrop="static"
      scrollable={true}
      isOpen={modal}
      toggle={() => setModal((z) => !z)}
    >
      <ModalHeader toggle={() => setModal((z) => !z)}>
        TƏLƏB OLUNAN SƏNƏDLƏRİN YENİDƏN ƏLAVƏ EDİLMƏSİ
      </ModalHeader>
      <ModalBody>
        <div className="col-lg-12 gap-3 login-form">
          <UncontrolledAccordion>
            {selectedItem?.visaApplicants?.map((applicant) => (
              <ApplicantCLP
                rootSetValue={setValue}
                rootWatch={watch}
                rootgetValues={getValues}
                key={applicant?.id}
                applicant={applicant}
                setRemovedDocsFromBack={setRemovedDocsFromBack}
              />
            ))}
          </UncontrolledAccordion>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          disabled={
            loading ||
            !selectedItem?.visaApplicants?.every(
              (z) => getValues()[z?.id]?.length
            )
          }
          type="button"
          onClick={submitHandler}
          className="theme-btn border-0 rounded-0 btn-style-one"
        >
          <span className="btn-title text-white">
            {loading ? (
              <Spinner
                style={{ width: "0.7rem", height: "0.7rem" }}
                type="grow"
                color="light"
              />
            ) : (
              t("Send")
            )}
          </span>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ResendModal;
