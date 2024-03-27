"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Input, FormFeedback, Button, Spinner } from "reactstrap";

const RegisterThird = ({
  setShouldOpenTab,
  setActiveTab,
  globalSetter,
  globalWatch,
}) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    reset,
    control,
    setValue,
    getValues,
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
      ...globalWatch("mainForm"),
      password: data?.password,
      confirmPassword: data?.confirmPassword,
    };
    try {
      const res = await axios.post(
        "https://visa-server.azurewebsites.net/api/v1/auth/register",
        payload
      );
      if (res?.data?.succeeded) {
        globalSetter("mainForm", { ...globalWatch("mainForm"), ...payload });
        toast.success(t("SuccessOperation"));
        router.push("/auth/signin");
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
  const passwordValidation = {
    required: { value: true, message: `${t("Password")} ${t("IsRequired")}` },
    minLength: {
      value: 8,
      message: `${t("Password")} ${t("MustBeAtLeast8Characters")}`,
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
      message: `${t("Password")} ${t("MustIncludeUppercaseLowercaseNumber")}`,
    },
  };

  const confirmPasswordValidation = {
    required: {
      value: true,
      message: `${t("ConfirmPassword")} ${t("IsRequired")}`,
    },
    validate: (value) =>
      value === getValues("password") || `${t("PasswordsDoNotMatch")}`,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <Controller
              control={control}
              rules={passwordValidation}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.password ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="password"
                  placeholder={t("EnterPassword")}
                />
              )}
            />
            {errors.password && (
              <FormFeedback>{errors.password.message}</FormFeedback>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <Controller
              control={control}
              rules={confirmPasswordValidation}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  invalid={errors?.confirmPassword ? true : false}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  type="password"
                  placeholder={t("EnterConfirmPassword")}
                />
              )}
            />
            {errors.confirmPassword && (
              <FormFeedback>{errors.confirmPassword.message}</FormFeedback>
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

export default RegisterThird;
