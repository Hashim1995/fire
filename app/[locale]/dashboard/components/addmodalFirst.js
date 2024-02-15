"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { toast } from "react-toastify";
import { Input, FormFeedback, Button, Spinner, Label } from "reactstrap";
import { countriesStatic, validateDates } from "./options";
import { returnCurrentLangId } from "@/utils/currentLang";
import { useParams } from "next/navigation";

const AddModalFirst = ({
  setShouldOpenTab,
  setActiveTab,
  globalSetter,
  globalWatch,
}) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [countries, setCountries] = useState([]);

  const handleChange = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  const t = useTranslations();
  const router = useParams();
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
      VisaType: 1,
    },
  });

  const onSubmit = async (data) => {
    const dateValid = validateDates(data?.DepartureDate, data?.ReturnDate);
    if (!dateValid?.status) {
      toast.error(dateValid?.message);
      return;
    }

    globalSetter("DepartureDate", data?.DepartureDate);
    globalSetter("ReturnDate", data?.ReturnDate);
    globalSetter("VisaType", data?.VisaType);
    globalSetter("EntryCountry", data?.EntryCountry);
    globalSetter("DestinationCountryId", data?.DestinationCountryId);
    setActiveTab("2");
  };

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        `https://ivisavmlinux.azurewebsites.net/api/v1/country/initial?Language=${returnCurrentLangId(
          router.locale
        )}`
      );
      setCountries(res?.data?.data);
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
    fetchCountries();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>{t("DepartureDate")}</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("DepartureDate")} ${t("IsRequired")}`,
                },
              }}
              name="DepartureDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.DepartureDate ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="date"
                />
              )}
            />
            {errors.DepartureDate && (
              <FormFeedback>{errors.DepartureDate.message}</FormFeedback>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>{t("ReturnDate")}</Label>

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("ReturnDate")} ${t("IsRequired")}`,
                },
              }}
              name="ReturnDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.ReturnDate ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="date"
                />
              )}
            />
            {errors.ReturnDate && (
              <FormFeedback>{errors.ReturnDate.message}</FormFeedback>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>{t("DestinationCountryId")}</Label>

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("DestinationCountryId")} ${t("IsRequired")}`,
                },
              }}
              name="DestinationCountryId"
              render={({ field: { onChange, value } }) => (
                <Select
                  className="react-select"
                  options={countries}
                  value={value}
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  aria-invalid={errors.EntryCountry}
                  onChange={onChange}
                  styles={{
                    menuPortal: (base, state) => ({
                      ...base,
                      zIndex: 9999,
                      borderColor: state.isFocused
                        ? "#ddd"
                        : errors.DestinationCountryId
                        ? "#ddd"
                        : "red",
                      // overwrittes hover style
                      "&:hover": {
                        borderColor: state.isFocused
                          ? "#ddd"
                          : errors.DestinationCountryId
                          ? "#ddd"
                          : "red",
                      },
                    }),
                  }}
                />
              )}
            />
            {errors.DestinationCountryId && (
              <div
                style={{
                  width: "100%",
                  marginTop: " 0.25rem",
                  fontSize: " .875em",
                  color: "#dc3545",
                }}
              >
                {errors.DestinationCountryId.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>{t("EntryCountry")}</Label>

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("EntryCountry")} ${t("IsRequired")}`,
                },
              }}
              name="EntryCountry"
              render={({ field: { onChange, value } }) => (
                <Select
                  className="react-select"
                  options={countriesStatic}
                  value={value}
                  aria-invalid={errors.EntryCountry}
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  onChange={onChange}
                  styles={{
                    menuPortal: (base, state) => ({
                      ...base,
                      borderColor: state.isFocused
                        ? "#ddd"
                        : errors.EntryCountry
                        ? "#ddd"
                        : "red",
                      // overwrittes hover style
                      "&:hover": {
                        borderColor: state.isFocused
                          ? "#ddd"
                          : errors.EntryCountry
                          ? "#ddd"
                          : "red",
                      },
                      zIndex: 9999,
                    }),
                  }}
                />
              )}
            />
            {errors.EntryCountry && (
              <div
                style={{
                  width: "100%",
                  marginTop: " 0.25rem",
                  fontSize: " .875em",
                  color: "#dc3545",
                }}
              >
                {errors.EntryCountry.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>{t("VisaType")}</Label>
            <br />
            <Controller
              control={control}
              name="VisaType"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <div
                  className="d-flex pe-2  gap-2 forchildspan"
                  id="documentTypeContainer"
                >
                  <Label
                    for="VisaType"
                    className=" d-flex align-items-center  gap-2"
                  >
                    <Input
                      type="radio"
                      id="VisaType"
                      name="VisaType"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      checked={value == 1}
                      value={1}
                    />
                    <span className={errors?.VisaType ? "text-danger" : ""}>
                      {t("visaTypeSingle")}
                    </span>
                  </Label>
                  <Label
                    for="VisaTypeSecond"
                    className=" d-flex align-items-center  gap-2"
                  >
                    <Input
                      type="radio"
                      id="VisaTypeSecond"
                      name="VisaType"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      checked={value == 2}
                      value={2}
                    />
                    <span className={errors?.VisaType ? "text-danger" : ""}>
                      {t("visaTypeMulti")}
                    </span>
                  </Label>
                </div>
              )}
            />
            {errors.VisaType && (
              <FormFeedback>{errors.VisaType.message}</FormFeedback>
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
              t("next")
            )}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default AddModalFirst;
