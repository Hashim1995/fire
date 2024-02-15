"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Input, FormFeedback, Button, Spinner } from "reactstrap";

const ContactForm = () => {
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
      fullname: data?.fullname,
      email: data?.email,
      title: data?.title,
      phoneNumber: data?.phoneNumber,
      description: data?.description,
    };
    try {
      const res = await axios.post(
        "https://ivisavmlinux.azurewebsites.net/api/v1/appeal",
        payload
      );
      if (res?.data?.succeeded) {
        reset();
        toast.success(t("SuccessOperation"));
      }
    } catch (err) {
      toast.error(t("ErrorOperation"));
    }
    setLoading(false);
  };
  const session = useSession();

  useEffect(() => {
    const user = session?.data?.user?.data;
    if (user) {
      setValue("fullname", `${user?.firstname} ${user?.lastname}`);
      setValue("email", user?.email);
    }
  }, [session]);

  return (
    <div className="col-xl-7 col-lg-6">
      <div className="sec-title">
        <span className="sub-title">{t("SendUsEmail")}</span>
        <h2>{t("FeelFreeToWrite")}</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: `${t("Name")} ${t("IsRequired")}`,
                  },
                }}
                name="fullname"
                render={({ field: { onChange, value } }) => (
                  <Input
                    invalid={errors?.fullname ? true : false}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    placeholder={t("EnterName")}
                  />
                )}
              />
              {errors.fullname && (
                <FormFeedback>{errors.fullname.message}</FormFeedback>
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
                    message: `${t("Title")} ${t("IsRequired")}`,
                  },
                }}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <Input
                    invalid={errors?.title ? true : false}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    placeholder={t("EnterTitle")}
                  />
                )}
              />
              {errors.title && (
                <FormFeedback>{errors.title.message}</FormFeedback>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    placeholder={t("EnterPhoneNumber")}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: `${t("Description")} ${t("IsRequired")}`,
              },
            }}
            name="description"
            render={({ field: { onChange, value } }) => (
              <Input
                invalid={errors?.description ? true : false}
                value={value}
                onChange={onChange}
                className="form-control"
                rows="7"
                type="textarea"
                placeholder={t("EnterDescription")}
              />
            )}
          />
          {errors.description && (
            <FormFeedback>{errors.description.message}</FormFeedback>
          )}
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

          <button
            onClick={() => reset()}
            type="button"
            className="theme-btn btn-style-one bg-theme-color5"
          >
            <span className="btn-title">{t("Reset")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
