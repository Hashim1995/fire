import React, { useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { useTranslations } from "next-intl";
import { DocumentTypes, toBase64 } from "../options";

const AddFileToApplicantModal = ({
  setModal,
  modal,
  parentSetter,
  parentWatch,
  rootSetValue,
  applicant,
  rootWatch,
}) => {
  const {
    register,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const t = useTranslations();

  const [visualFile, setVisualFile] = useState(null);

  const onSubmit = async (data) => {
    const prev = parentWatch("list");
    const prevRoot = rootWatch(`${applicant?.id}`);
    const payload = {
      documentType: data?.documentType,
      file: visualFile,
      clientId: self.crypto.randomUUID(),
    };
    parentSetter("list", [...prev, payload]);
    rootSetValue(`${applicant?.id}`, [...prevRoot, payload]);
    setModal(false);
  };
  const handleFileChange = async (event, index) => {
    const originalFile = event.target.files[0]; // Get the first file
    if (originalFile) {
      try {
        const fileName = originalFile.name;

        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const fileData = e.target.result;
          setVisualFile({
            file: fileData,
            fileName: fileName,
            type: originalFile.type,
            orjinalFile: originalFile,
          });
        };
        fileReader.readAsDataURL(originalFile); // Read file as data URL (base64)
      } catch (error) {
        console.error(error);
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
      isOpen={modal}
      toggle={() => setModal((z) => !z)}
    >
      <ModalHeader toggle={() => setModal((z) => !z)}>
        {t("addDocument")}
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-sm-12">
              <div className="mb-3">
                <Label>
                  {t("documentType")} <span style={{ color: "red" }}>*</span>
                </Label>

                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: `${t("documentType")} ${t("IsRequired")}`,
                    },
                  }}
                  name="documentType"
                  render={({ field: { onChange, value } }) => (
                    <Select
                      className="react-select"
                      options={
                        DocumentTypes?.filter((type) =>
                          applicant?.visaDocuments?.find(
                            (option) => option.documentType === type.value
                          )
                        ) || []
                      }
                      value={value}
                      menuPortalTarget={document.body}
                      menuPosition={"fixed"}
                      aria-invalid={errors?.documentType}
                      onChange={onChange}
                      styles={{
                        menuPortal: (base, state) => ({
                          ...base,
                          zIndex: 9999,
                          borderColor: state.isFocused
                            ? "#ddd"
                            : errors?.documentType
                            ? "#ddd"
                            : "red",
                          // overwrittes hover style
                          "&:hover": {
                            borderColor: state.isFocused
                              ? "#ddd"
                              : errors?.documentType
                              ? "#ddd"
                              : "red",
                          },
                        }),
                      }}
                    />
                  )}
                />
                {errors?.documentType && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: " 0.25rem",
                      fontSize: " .875em",
                      color: "#dc3545",
                    }}
                  >
                    {errors?.documentType?.message}
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-3">
                <Label>
                  {t("file")} <span style={{ color: "red" }}>*</span>
                </Label>

                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: `${t("file")} ${t("IsRequired")}`,
                    },
                  }}
                  name="file"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      invalid={errors?.file ? true : false}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        handleFileChange(e);
                      }}
                      className="form-control"
                      placeholder={t("Enter")}
                      type="file"
                    />
                  )}
                />
                {errors?.file && (
                  <FormFeedback>{errors?.file?.message}</FormFeedback>
                )}
              </div>
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-end">
            <Button
              type="submit"
              className="theme-btn text-white me-1 border-0 rounded-0 btn-style-one"
            >
              <span className="btn-title text-white">{t("add")}</span>
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default AddFileToApplicantModal;
