"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Input, FormFeedback, Button, Spinner } from "reactstrap";

const RegisterFirst = ({
  setShouldOpenTab,
  setActiveTab,
  globalSetter,
  globalWatch,
}) => {
  const [loading, setLoading] = useState(false);

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
      fullname: "",
      email: "",
      title: "",
      phoneNumber: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const payload = {
      firstname: data?.firstname,
      lastname: data?.lastname,
      email: data?.email,
      birthday: data?.birthday,
    };
    try {
      const res = await axios.post(
        "https://ivisavmlinux.azurewebsites.net/api/v1/auth/register/first-step",
        payload
      );
      if (res?.data?.succeeded) {
        globalSetter("mainForm", { ...globalWatch("mainForm"), ...payload });
        toast.success(t("SuccessOperation"));
        setShouldOpenTab("2");
        setActiveTab("2");
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
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("Firstname")} ${t("IsRequired")}`,
                },
              }}
              name="firstname"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.firstname ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="text"
                  placeholder={t("EnterFirstname")}
                />
              )}
            />
            {errors.firstname && (
              <FormFeedback>{errors.firstname.message}</FormFeedback>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("Email")} ${t("IsRequired")}`,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("InvalidEmail"),
                },
              }}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.email ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="text"
                  placeholder={t("EnterEmail")}
                />
              )}
            />
            {errors.email && (
              <FormFeedback>{errors.email.message}</FormFeedback>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("Lastname")} ${t("IsRequired")}`,
                },
              }}
              name="lastname"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.lastname ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="text"
                  placeholder={t("EnterLastname")}
                />
              )}
            />
            {errors.lastname && (
              <FormFeedback>{errors.lastname.message}</FormFeedback>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${t("Birthday")} ${t("IsRequired")}`,
                },
              }}
              name="birthday"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.birthday ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="date"
                  placeholder={t("EnterBirthday")}
                />
              )}
            />
            {errors.birthday && (
              <FormFeedback>{errors.birthday.message}</FormFeedback>
            )}
          </div>
        </div>
      </div>

      <div className="mb-3">
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
              t("SendMessage")
            )}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default RegisterFirst;
