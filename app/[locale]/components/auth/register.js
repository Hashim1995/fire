"use client"

import { useEffect, useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { signIn, useSession } from "next-auth/react"
import { Label, Spinner, Form, FormGroup, Input, Button, FormFeedback, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import './login.scss'
import { useTranslations } from "next-intl";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import RegisterFirst from './registerFirst'
import RegisterSecond from './registerSecond'
import RegisterThird from './registerThird'

export default function Register() {
    const session = useSession()
    const [activeTab, setActiveTab] = useState('1');
    const [shouldOpenTab, setShouldOpenTab] = useState('1');
    const router = useRouter();
    // Redirect to home if already authenticated
    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/');
        }
    }, [session])

    const [loading, setLoading] = useState(false);

    const {
        register,
        setValue,
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            mainForm: {},
        }
    })

    // const onSubmit = async (data) => {
    //     setLoading(true)
    //     // const result = await signIn('credentials', {
    //     //     email: data.email,
    //     //     password: data.password,
    //     //     redirect: false,
    //     //     callbackUrl: "/",
    //     // });
    //     // setLoading(false);
    //     try {
    //         const result = await signIn('credentials', {
    //             email: data.email,
    //             password: data.password,
    //             redirect: false,
    //             callbackUrl: "/",
    //         });
    //         setLoading(false);


    //         if (result?.error) {
    //             // Check if error is a string and parse it
    //             const errorObj = typeof result.error === 'string' ? JSON.parse(result.error) : result.error;
    //             console.log(errorObj, ' bilal parsed error');
    //             const messages = errorObj.messages || ['Xəta baş verdi'];
    //             toast(messages.join(', '), { hideProgressBar: true, autoClose: 1000, type: 'error', position: 'top-right' });
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }



    // }
    const onSubmit = data => console.log(data);
    const t = useTranslations();
    return (
        <section className="mt-10 flex flex-col items-center gap-4">
            <div className="container">
                <div className="row">
                    <div className="col-8  offset-2  login-box">


                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 gap-3 login-form">
                                <Nav className="justify-content-center" tabs>
                                    <NavItem>
                                        <NavLink disabled={shouldOpenTab !== '1'} className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                            İstifadəçi məlumatları
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled={shouldOpenTab !== '2'} className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                            Email təsdiqləmə kodu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled={shouldOpenTab !== '3'} className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                            Şifrə | Qeydiyyatı tamamla
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane className="mt-2" tabId="1"><RegisterFirst globalSetter={setValue} globalWatch={watch} setActiveTab={setActiveTab} setShouldOpenTab={setShouldOpenTab} /></TabPane>
                                    <TabPane className="mt-2" tabId="2"><RegisterSecond globalSetter={setValue} globalWatch={watch} setActiveTab={setActiveTab} setShouldOpenTab={setShouldOpenTab} /></TabPane>
                                    <TabPane className="mt-2" tabId="3"><RegisterThird globalSetter={setValue} globalWatch={watch} setActiveTab={setActiveTab} setShouldOpenTab={setShouldOpenTab} /></TabPane>

                                </TabContent>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
