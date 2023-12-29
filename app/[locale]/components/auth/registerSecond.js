'use client'
import { Button, Spinner } from 'reactstrap';
import './opt.scss'
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';
import axios from 'axios';


function ReegisterSecond({ setShouldOpenTab, setActiveTab, globalSetter, globalWatch }) {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const t = useTranslations()

    const onSubmit = async () => {
        setLoading(true)
        const payload = {
            ...globalWatch('mainForm'),
            otpCode: otp,
        }
        try {
            const res = await axios.post('https://ivisaapp.azurewebsites.net/api/v1/auth/register/second-step', payload);
            if (res?.data?.succeeded) {
                globalSetter('mainForm', payload);
                toast.success(t("SuccessOperation"));
                setShouldOpenTab('3');
                setActiveTab('3');
            }
        }
        catch (err) {
            toast.error(t("ErrorOperation"))
        }
        setLoading(false)
    }

    return (
        <div >
            <div className="row">
                <div className="col-sm-12 justify-content-center">
                    <div className="mb-3">
                        <div className="otpContainer">
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">


                        <Button disabled={loading} onClick={() => onSubmit()} type="submit" className="theme-btn me-1 border-0 rounded-0 btn-style-one"><span className="btn-title text-white">{
                            loading ?
                                <Spinner
                                    style={{ width: "0.7rem", height: "0.7rem" }}
                                    type="grow"
                                    color="light"
                                /> : t("SendMessage")}</span></Button>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default ReegisterSecond;