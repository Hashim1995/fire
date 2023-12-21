"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { signIn } from "next-auth/react"
import { Label, Form, FormGroup, Input, Button } from "reactstrap"
import './login.scss'

export default function FormComponent() {
    const [signInCredentialsError, setSignInCredentialsError] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const gitHubProvider = async () => await signIn('github', {
        redirect: true,
        callbackUrl: "/",
    })

    const onSubmit = async (data) => {
        const result = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/",
        })

        console.debug(result)

        setSignInCredentialsError(!!result?.error)
    }

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

                            {signInCredentialsError && <p className="text-red-500">Invalid credentials</p>}

                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input type="email" placeholder="email" {...register("email", { required: true })} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" placeholder="password" {...register("password", { required: true })} className="form-control" i />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
