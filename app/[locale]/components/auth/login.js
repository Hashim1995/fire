"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import {
  Label,
  Spinner,
  Form,
  FormGroup,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import "./login.scss";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ForgetPassword from "./forgetPassword";

export default function FormComponent() {
  const session = useSession();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const router = useRouter();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session]);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // const result = await signIn('credentials', {
    //     email: data.email,
    //     password: data.password,
    //     redirect: false,
    //     callbackUrl: "/",
    // });
    // setLoading(false);
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "/",
      });
      setLoading(false);

      if (result?.error) {
        // Check if error is a string and parse it
        const errorObj =
          typeof result.error === "string"
            ? JSON.parse(result.error)
            : result.error;
        const messages = errorObj.messages || [t("ErrorOperation")];
        toast(messages.join(", "), {
          hideProgressBar: true,
          autoClose: 1000,
          type: "error",
          position: "top-right",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const t = useTranslations();
  return (
    <section className="mt-10 flex flex-col items-center gap-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">
              {/* {signInCredentialsError && <p className="text-red-500">Invalid credentials</p>} */}
            </div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 gap-3 login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-2">
                    <label className="form-control-label">{t("email")}</label>

                    <Controller
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: `${t("Email")} ${t("IsRequired")}`,
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
                  <div className="form-group mb-2">
                    <label className="form-control-label">
                      {t("password")}
                    </label>
                    <Controller
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: `${t("Password")} ${t("IsRequired")}`,
                        },
                      }}
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

                  <div className=" row">
                    <div className="col-lg-6 login-btm login-button">
                      <Button
                        disabled={loading}
                        type="submit"
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
                            t("login")
                          )}
                        </span>
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",
                      }}
                      className="col-lg-6 "
                    >
                      <p
                        onClick={toggle}
                        className=" mt-1 font-italic"
                        style={{
                          color: "#1434A4",
                          margin: "0",
                          cursor: "pointer",
                        }}
                      >
                        {" "}
                        {t("ForgetPassword")}{" "}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && <ForgetPassword modal={modal} setModal={setModal} />}
    </section>
  );
}
