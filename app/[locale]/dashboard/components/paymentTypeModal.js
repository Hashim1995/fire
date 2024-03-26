"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { toast } from "react-toastify";
import {
  Input,
  FormFeedback,
  Button,
  Spinner,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { countriesStatic, validateDates } from "./options";
import { returnCurrentLangId } from "@/utils/currentLang";
import { useParams } from "next/navigation";

const PaymentTypeModal = ({
  setShowPaymentTypeModal,
  showPaymentTypeModal,
  visaAppointmentId,
}) => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(null);
  const [btnLoader, setBtnLoader] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState({});

  const session = useSession();
  const t = useTranslations();
  const {
    register,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      paymentType: "1",
    },
  });

  const onSubmit = async (data) => {
    setBtnLoader(true);
    const token = session?.data?.user?.data?.token;
    const options = Object.keys(selectedExtras).reduce((acc, key) => {
      if (selectedExtras[key] === true) {
        acc.push(Number(key));
      }
      return acc;
    }, []);
    try {
      const response = await axios.post(
        "https://ivisavmlinux.azurewebsites.net/api/v1/payment",
        {
          paymentType: Number(data?.paymentType),
          visaAppointmentId: visaAppointmentId,
          extraOptions: options,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.succeeded) {
        setShowPaymentTypeModal(false);
        setBtnLoader(false);
        if (response?.data?.data?.paymentLink) {
          window.open(response?.data?.data?.paymentLink);
        }
      }
    } catch (error) {
      if (Array.isArray(error?.response?.data?.messages)) {
        error?.response?.data?.messages?.map((z) => {
          toast.error(z);
        });
      } else {
        toast.error(t("ErrorOperation"));
      }
    }
    setBtnLoader(false);
  };

  const fetchPrice = async () => {
    const token = session?.data?.user?.data?.token;

    try {
      const response = await axios.get(
        "https://ivisavmlinux.azurewebsites.net/api/v1/payment-types",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.succeeded) {
        setPrice(response?.data?.data);
        setLoading(false);
      }
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
    fetchPrice();
  }, []);
  useEffect(() => {
    const selectedId = parseInt(control.value);
    const initialSelectedExtras = {};
    price?.forEach((option) => {
      if (option.id === selectedId) {
        option?.extraOptions?.forEach((extraOption) => {
          initialSelectedExtras[extraOption.id] = false;
        });
      }
    });
    setSelectedExtras(initialSelectedExtras);
  }, [control.value, price]);
  return (
    <Modal
      className="modal-dialog-centered"
      size="lg"
      centered
      backdrop="static"
      scrollable={true}
      isOpen={showPaymentTypeModal}
      toggle={() => setShowPaymentTypeModal((z) => !z)}
    >
      <ModalHeader toggle={() => setShowPaymentTypeModal((z) => !z)}>
        {t("paymentType")}
      </ModalHeader>
      <ModalBody>
        {!loading ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <Label>{t("paymentType")}</Label>
                  <br />
                  <Controller
                    control={control}
                    name="paymentType"
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <div
                        className="d-flex pe-2  gap-2 forchildspan"
                        id="documentTypeContainer"
                      >
                        <Label
                          for="paymentType"
                          className=" d-flex align-items-center  gap-2"
                        >
                          <Input
                            type="radio"
                            id="paymentType"
                            name="paymentType"
                            onChange={(e) => {
                              onChange(e);
                              setSelectedExtras({});
                            }}
                            checked={value == 1}
                            value={1}
                          />
                          <span
                            className={errors?.paymentType ? "text-danger" : ""}
                          >
                            {t("paymentTypeSimple")}{" "}
                            {price ? price[0]?.amount : ""} AZN
                          </span>
                        </Label>
                        <Label
                          for="paymentTypeSecond"
                          className=" d-flex align-items-center  gap-2"
                        >
                          <Input
                            type="radio"
                            id="paymentTypeSecond"
                            name="paymentType"
                            onChange={(e) => {
                              onChange(e);
                              setSelectedExtras({});
                            }}
                            checked={value == 2}
                            value={2}
                          />
                          <span
                            className={errors?.paymentType ? "text-danger" : ""}
                          >
                            {t("paymentTypeComplex")}{" "}
                            {price ? price[1]?.amount : ""} AZN
                          </span>
                        </Label>
                      </div>
                    )}
                  />
                  {errors.paymentType && (
                    <FormFeedback>{errors.paymentType.message}</FormFeedback>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <h5>{t("additionalOptions")}</h5>
            <div>
              <Controller
                control={control}
                name="paymentType"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <div>
                    {price?.map((option) => {
                      if (option.id === parseInt(value)) {
                        // Her iki extraOption için bir row oluştur
                        const groupedExtraOptions = [];
                        for (
                          let i = 0;
                          i < option.extraOptions.length;
                          i += 2
                        ) {
                          groupedExtraOptions.push(
                            option.extraOptions.slice(i, i + 2)
                          );
                        }

                        return groupedExtraOptions?.map((group, index) => (
                          <div className="row" key={index}>
                            {group?.map((extraOption) => (
                              <div className="col-6" key={extraOption.id}>
                                <Label
                                  className="d-flex align-items-center gap-2"
                                  for={`extraOption-${extraOption.id}`}
                                >
                                  <Input
                                    type="checkbox"
                                    id={`extraOption-${extraOption.id}`}
                                    name={`extraOptions[${extraOption.id}]`}
                                    checked={selectedExtras[extraOption.id]}
                                    onChange={(e) => {
                                      const updatedSelectedExtras = {
                                        ...selectedExtras,
                                        [extraOption.id]: e.target.checked,
                                      };
                                      setSelectedExtras(updatedSelectedExtras);
                                    }}
                                  />
                                  <span>
                                    {extraOption.title} - {extraOption.amount}{" "}
                                    AZN
                                  </span>
                                </Label>
                              </div>
                            ))}
                          </div>
                        ));
                      }
                      return null;
                    })}
                  </div>
                )}
              />
            </div>

            <div className="mb-3 d-flex justify-content-end">
              <Button
                disabled={btnLoader}
                type="submit"
                className="theme-btn me-1 border-0 rounded-0 btn-style-one"
              >
                <span className="btn-title text-white">
                  {btnLoader ? (
                    <Spinner
                      style={{ width: "0.7rem", height: "0.7rem" }}
                      type="grow"
                      color="light"
                    />
                  ) : (
                    t("pay")
                  )}
                </span>
              </Button>
            </div>
          </form>
        ) : (
          <Spinner />
        )}
      </ModalBody>
    </Modal>
  );
};

export default PaymentTypeModal;
