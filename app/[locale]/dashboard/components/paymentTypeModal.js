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
}) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [countries, setCountries] = useState([]);

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
    console.log(data, "sahmar");
  };

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
                          }}
                          checked={value == 1}
                          value={1}
                        />
                        <span
                          className={errors?.paymentType ? "text-danger" : ""}
                        >
                          Tək
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
                          }}
                          checked={value == 2}
                          value={2}
                        />
                        <span
                          className={errors?.paymentType ? "text-danger" : ""}
                        >
                          Çox
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

          <div className="mb-3 d-flex justify-content-end">
            <Button
              disabled={loading}
              type="submit"
              className="theme-btn me-1 border-0 rounded-0 btn-style-one"
            >
              <span className="btn-title text-white">
                {loading ? (
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
      </ModalBody>
    </Modal>
  );
};

export default PaymentTypeModal;
