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
import { convertArray } from "@/utils/toLabelValue";

const AddModalFirst = ({
  setShouldOpenTab,
  setActiveTab,
  globalSetter,
  globalWatch,
}) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [enteredCountries, setenteredCountries] = useState([]);
  const [passportTypes, setPassportTypes] = useState([]);

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
    watch,
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
    globalSetter("passportType", data?.passportType);
    globalSetter("DestinationCountryId", data?.DestinationCountryId);
    setActiveTab("2");
  };

  // const fetchCountries = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://ivisavmlinux.azurewebsites.net/api/v1/country/initial?Language=${returnCurrentLangId(
  //         router.locale
  //       )}`
  //     );
  //     setCountries(res?.data?.data);
  //   } catch (error) {
  //     if (Array.isArray(error?.response?.data?.messages)) {
  //       error?.response?.data?.messages?.map((z) => {
  //         toast.error(z);
  //       });
  //     } else {
  //       toast.error(t("ErrorOperation"));
  //     }
  //   }
  // };

  const fetchPassportTypes = async () => {
    try {
      const res = await axios.get(
        `https://ivisavmlinux.azurewebsites.net/api/v1/passport?language=${returnCurrentLangId(
          router.locale
        )}`
      );
      setPassportTypes(res?.data);
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

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        `https://ivisavmlinux.azurewebsites.net/api/v1/country?Language=${returnCurrentLangId(
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

  const fetchEnteredCountries = async () => {
    try {
      const res = await axios.get(
        `https://ivisavmlinux.azurewebsites.net/api/v1/country/entered?Language=${returnCurrentLangId(
          router.locale
        )}&InEuropeanUnion=${watch("DestinationCountryId")?.europeanUnion}`
      );
      setenteredCountries(res?.data?.data);
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

  //burani deyish

  useEffect(() => {
    if (watch("DestinationCountryId")) {
      fetchEnteredCountries();
    }
  }, [watch("DestinationCountryId")]);

  useEffect(() => {
    fetchCountries();
  }, [watch("DestinationCountryId")?.europeanUnion]);

  useEffect(() => {
    fetchPassportTypes();
  }, []);

  console.log(!watch("DestinationCountryId"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>
              {t("DepartureDate")} <span style={{ color: "red" }}>*</span>
            </Label>
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
            {errors?.DepartureDate && (
              <FormFeedback>{errors?.DepartureDate?.message}</FormFeedback>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>
              {t("ReturnDate")} <span style={{ color: "red" }}>*</span>
            </Label>

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
            {errors?.ReturnDate && (
              <FormFeedback>{errors?.ReturnDate?.message}</FormFeedback>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>
              {t("DestinationCountryId")}{" "}
              <span style={{ color: "red" }}>*</span>
            </Label>

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
                  options={convertArray(countries)}
                  value={value}
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  placeholder={t("select")}
                  aria-invalid={errors?.DestinationCountryId}
                  onChange={(val) => {
                    setValue("EntryCountry", null);
                    onChange(val);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: errors?.DestinationCountryId
                        ? "red !important"
                        : state.isFocused
                        ? "#86b7fe"
                        : baseStyles.borderColor,
                      boxShadow: errors?.DestinationCountryId
                        ? "0 0 0 1px red !important"
                        : state.isFocused
                        ? "0 0 0 1px #86b7fe"
                        : baseStyles.boxShadow,
                      "&:hover": {
                        borderColor: errors?.DestinationCountryId
                          ? "red !important"
                          : state.isFocused
                          ? "#86b7fe"
                          : baseStyles.borderColor,
                      },
                    }),
                    menuPortal: (base) => ({
                      ...base,
                      zIndex: 9999,
                    }),
                  }}
                />
              )}
            />
            {errors?.DestinationCountryId && (
              <div
                style={{
                  width: "100%",
                  marginTop: " 0.25rem",
                  fontSize: " .875em",
                  color: "#dc3545",
                }}
              >
                {errors?.DestinationCountryId?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>
              {t("EntryCountry")} <span style={{ color: "red" }}>*</span>
            </Label>

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
                  isDisabled={!watch("DestinationCountryId")}
                  options={convertArray(enteredCountries)}
                  value={value}
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  placeholder={t("select")}
                  aria-invalid={!!errors?.EntryCountry}
                  onChange={(val) => {
                    setValue("EntryCountry", null);
                    onChange(val);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: errors?.EntryCountry
                        ? "red !important"
                        : state.isFocused
                        ? "#86b7fe"
                        : baseStyles.borderColor,
                      boxShadow: errors?.EntryCountry
                        ? "0 0 0 1px red !important"
                        : state.isFocused
                        ? "0 0 0 1px #86b7fe"
                        : baseStyles.boxShadow,
                      "&:hover": {
                        borderColor: errors?.EntryCountry
                          ? "red !important"
                          : state.isFocused
                          ? "#86b7fe"
                          : baseStyles.borderColor,
                      },
                    }),
                    menuPortal: (base) => ({
                      ...base,
                      zIndex: 9999,
                    }),
                  }}
                />
              )}
            />
            {errors?.EntryCountry && (
              <div
                style={{
                  width: "100%",
                  marginTop: " 0.25rem",
                  fontSize: " .875em",
                  color: "#dc3545",
                }}
              >
                {errors?.EntryCountry?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>
              {t("passportType")} <span style={{ color: "red" }}>*</span>
            </Label>

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("passportType")} ${t("IsRequired")}`,
                },
              }}
              name="passportType"
              render={({ field: { onChange, value } }) => (
                <Select
                  className="react-select"
                  options={passportTypes}
                  value={value}
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  placeholder={t("select")}
                  aria-invalid={!!errors?.passportType}
                  onChange={(val) => {
                    setValue("passportType", null);
                    onChange(val);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: errors?.passportType
                        ? "red !important"
                        : state.isFocused
                        ? "#86b7fe"
                        : baseStyles.borderColor,
                      boxShadow: errors?.passportType
                        ? "0 0 0 1px red !important"
                        : state.isFocused
                        ? "0 0 0 1px #86b7fe"
                        : baseStyles.boxShadow,
                      "&:hover": {
                        borderColor: errors?.passportType
                          ? "red !important"
                          : state.isFocused
                          ? "#86b7fe"
                          : baseStyles.borderColor,
                      },
                    }),
                    menuPortal: (base) => ({
                      ...base,
                      zIndex: 9999,
                    }),
                  }}
                />
              )}
            />
            {errors?.passportType && (
              <div
                style={{
                  width: "100%",
                  marginTop: " 0.25rem",
                  fontSize: " .875em",
                  color: "#dc3545",
                }}
              >
                {errors?.passportType?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Label>
              {t("VisaType")} <span style={{ color: "red" }}>*</span>
            </Label>
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
            {errors?.VisaType && (
              <FormFeedback>{errors?.VisaType?.message}</FormFeedback>
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
