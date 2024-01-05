"use client";
import {
    Button,
    Modal,
    Spinner,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    FormFeedback,
} from "reactstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "./login.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgetPassword = ({ setModal, modal }) => {
    const [loading, setLoading] = useState(false);
    const [resendOTPLoading, setResendOTPLoading] = useState(false);
    const [step, setStep] = useState(1); // New state to track the step

    const session = useSession();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        reset,
        getValues,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            otpCode: "",
            password: "",
            confirmPassword: "",
        },
    });

    const resendOtp = async (data) => {

        setResendOTPLoading(true)
        try {
            const response = await axios.post(
                "https://ivisaapp.azurewebsites.net/api/v1/auth/forget-password/otp",
                { email: watch('email') }
            );
            if (response.status === 200) {
                toast.success(t("ResentSendOtpCodeSuccess"))
            }

        } catch (error) {
            if (Array.isArray(error?.response?.data?.messages)) {
                error?.response?.data?.messages?.map(z => {
                    toast.error(z);
                })
            } else {
                toast.error(t("ErrorOperation"))
            }
        }
        setResendOTPLoading(false)

    }

    const onSubmit = async (data) => {
        setLoading(true);

        if (step === 1) {
            try {
                const response = await axios.post(
                    "https://ivisaapp.azurewebsites.net/api/v1/auth/forget-password/otp",
                    { email: data.email }
                );
                if (response.status === 200) {
                    console.log(response);
                }
                setStep(2);
            } catch (error) {
                if (Array.isArray(error?.response?.data?.messages)) {
                    error?.response?.data?.messages?.map(z => {
                        toast.error(z);
                    })
                } else {
                    toast.error(t("ErrorOperation"))
                }
            }
        } else if (step === 2) {
            try {
                const response = await axios.post(
                    "https://ivisaapp.azurewebsites.net/api/v1/auth/forget-password/otp/verify",
                    { email: data.email, otpCode: data.otpCode }
                );
                if (response.status === 200) {
                    console.log(response);
                }
                setStep(3);
            } catch (error) {
                if (Array.isArray(error?.response?.data?.messages)) {
                    error?.response?.data?.messages?.map(z => {
                        toast.error(z);
                    })
                } else {
                    toast.error(t("ErrorOperation"))
                }
            }
        } else if (step === 3) {
            try {
                const response = await axios.post(
                    "https://ivisaapp.azurewebsites.net/api/v1/auth/reset-password",
                    {
                        email: data.email,
                        password: data.password,
                        confirmPassword: data.confirmPassword,
                        otpCode: data.otpCode,
                    }
                );
                if (response.status === 200) {
                    console.log(response);
                }
                setModal(false);
            } catch (error) {
                if (Array.isArray(error?.response?.data?.messages)) {
                    error?.response?.data?.messages?.map(z => {
                        toast.error(z);
                    })
                } else {
                    toast.error(t("ErrorOperation"))
                }
            }
        }

        setLoading(false);
    };
    const t = useTranslations();

    const passwordValidation = {
        required: { value: true, message: `${t("Password")} ${t("IsRequired")}` },
        minLength: {
            value: 8,
            message: `${t("Password")} ${t("MustBeAtLeast8Characters")}`,
        },
        pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
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
        <Modal
            className="modal-dialog-centered"
            size="lg"
            centered
            backdrop={true}
            scrollable={true}
            isOpen={modal}
            toggle={() => setModal((z) => !z)}
        >
            <form onSubmit={handleSubmit(onSubmit)}>

                <ModalHeader toggle={() => setModal((z) => !z)}>
                    {t("ForgetPassword")}
                </ModalHeader>
                <ModalBody>
                    <div className="col-lg-12 gap-3 login-form">
                        {step == 1 && (
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
                        )}

                        {step == 2 && (
                            <div className="form-group mb-2">
                                <label className="form-control-label">Otp</label>

                                <Controller
                                    control={control}
                                    name="otpCode"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            invalid={errors?.otpCode ? true : false}
                                            value={value}
                                            onChange={onChange}
                                            className="form-control"
                                            type="password"
                                            placeholder={t("EnterotpCode")}
                                        />
                                    )}
                                />
                                {errors.otpCode && (
                                    <FormFeedback>{errors.otpCode.message}</FormFeedback>
                                )}
                            </div>
                        )}

                        {step == 3 && (
                            <>
                                <div className="form-group mb-2">
                                    <label className="form-control-label">{t("password")}</label>
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
                                <div className="form-group mb-2">
                                    <label className="form-control-label">
                                        {t("confirmPassword")}
                                    </label>
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
                                        <FormFeedback>
                                            {errors.confirmPassword.message}
                                        </FormFeedback>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
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
                                step === 1 ? t("SendOtpCode") : step === 2 ? t("ApproveOtp") : step === 3 ? t("ResetPassword") : 'Təsdiq'
                            )}
                        </span>
                    </Button>
                    {step === 2 && <Button
                        disabled={resendOTPLoading}
                        type="button"
                        onClick={() => resendOtp()}
                        className="theme-btn border-0 rounded-0 btn-style-one"
                    >
                        <span className="btn-title text-white">
                            {resendOTPLoading ? (
                                <Spinner
                                    style={{ width: "0.7rem", height: "0.7rem" }}
                                    type="grow"
                                    color="light"
                                />
                            ) : (
                                t("ResentSendOtpCode")
                            )}
                        </span>
                    </Button>}
                </ModalFooter>
            </form>

        </Modal>
    );
};

export default ForgetPassword;
