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
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import RegisterFirst from "../../components/auth/registerFirst";
import ReegisterSecond from "../../components/auth/registerSecond";
import RegisterThird from "../../components/auth/registerThird";
import AddModalSecond from "./addModalSecond";
import AddModalFirst from "./addmodalFirst";
import AddModalThird from "./addmodalThird";

const AddModal = ({
  setModal,
  modal,
  setVisaAppointmentId,
  setShowPaymentTypeModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [shouldOpenTab, setShouldOpenTab] = useState("1");
  const [extractData, setExtractData] = useState(null);

  const [resendOTPLoading, setResendOTPLoading] = useState(false);
  const [step, setStep] = useState(1); // New state to track the step
  const [activeTab, setActiveTab] = useState("1");
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const resendOtp = async (data) => {
    setResendOTPLoading(true);
    try {
      const response = await axios.post(
        "https://ivisaapp.azurewebsites.net/api/v1/auth/forget-password/otp",
        { email: watch("email") }
      );
      if (response.status === 200) {
        toast.success(t("ResentSendOtpCodeSuccess"));
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
    setResendOTPLoading(false);
  };

  const onSubmit = async (data) => {
    setLoading(true);

    if (step === 1) {
      try {
        const response = await axios.post(
          "https://ivisaapp.azurewebsites.net/api/v1/auth/forget-password/otp",
          { email: data.email }
        );

        setStep(2);
      } catch (error) {
        if (Array.isArray(error?.response?.data?.messages)) {
          error?.response?.data?.messages?.map((z) => {
            toast.error(z);
          });
        } else {
          toast.error(t("ErrorOperation"));
        }
      }
    } else if (step === 2) {
      try {
        const response = await axios.post(
          "https://ivisaapp.azurewebsites.net/api/v1/auth/forget-password/otp/verify",
          { email: data.email, otpCode: data.otpCode }
        );

        setStep(3);
      } catch (error) {
        if (Array.isArray(error?.response?.data?.messages)) {
          error?.response?.data?.messages?.map((z) => {
            toast.error(z);
          });
        } else {
          toast.error(t("ErrorOperation"));
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

        setModal(false);
        toast.success(t("SuccessOperation"));
      } catch (error) {
        if (Array.isArray(error?.response?.data?.messages)) {
          error?.response?.data?.messages?.map((z) => {
            toast.error(z);
          });
        } else {
          toast.error(t("ErrorOperation"));
        }
      }
    }

    setLoading(false);
  };
  const t = useTranslations();

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
        {t("applyVisa")}
      </ModalHeader>
      <ModalBody>
        <div className="col-lg-12 gap-3 login-form">
          <Nav className="justify-content-center" tabs>
            <NavItem>
              <NavLink
                disabled={activeTab !== "1"}
                className={activeTab == "1" ? "active" : ""}
                onClick={() => setActiveTab("1")}
              >
                {t("generalInfo")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                disabled={activeTab !== "2"}
                className={activeTab == "2" ? "active" : ""}
                onClick={() => setActiveTab("2")}
              >
                {t("passportInfo")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                disabled={activeTab !== "3"}
                className={activeTab == "3" ? "active" : ""}
                onClick={() => setActiveTab("3")}
              >
                {t("deailedInfo")}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane className="mt-2" tabId="1">
              <AddModalFirst
                globalSetter={setValue}
                globalWatch={watch}
                setActiveTab={setActiveTab}
                setShouldOpenTab={setShouldOpenTab}
              />
            </TabPane>
            <TabPane className="mt-2" tabId="2">
              <AddModalSecond
                setExtractData={setExtractData}
                globalSetter={setValue}
                globalWatch={watch}
                setActiveTab={setActiveTab}
                setShouldOpenTab={setShouldOpenTab}
              />
            </TabPane>
            <TabPane className="mt-2" tabId="3">
              <AddModalThird
                setVisaAppointmentId={setVisaAppointmentId}
                setShowPaymentTypeModal={setShowPaymentTypeModal}
                setModal={setModal}
                extractData={extractData}
                globalSetter={setValue}
                globalWatch={watch}
                setActiveTab={setActiveTab}
                setShouldOpenTab={setShouldOpenTab}
              />
            </TabPane>
          </TabContent>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddModal;
