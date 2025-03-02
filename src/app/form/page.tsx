'use client'
import { useActionState, useEffect } from "react"

import { formActionWithValidation } from "@/actions/form-actions";

import Image from "next/image";
import Button from "@/components/Button";

// Styles
import './login-page-style.scss'

// Assets
import SplashImage from '@/assets/splash-image.jpg'

export default function FormPage(){

    const [formState, formAction, isPending] = useActionState(formActionWithValidation, null)

    useEffect(function() {
        console.log("formstate", formState)
    }, [formState])

    return (
        <main className="login-page-main">
            <section className="login-page-main__content">
                <h2>Log ind</h2>
                <form
                    action={ formAction }
                    className="login-page-main__login-form"
                    noValidate
                    >
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="brugernavn"
                        defaultValue={formState?.formData?.username ? String(formState.formData.username) : ""}
                        />
                        <span>
                            { formState?.errors?.username === undefined ? '' : 'Du skal udfylde et brugernavn'
                                // formState?.errors?.fields?.username?._errors[0]
                            }
                        </span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="adgangskode"
                        defaultValue={formState?.formData?.password ? String(formState.formData.password) : "" } 
                        />
                    <span>
                            { formState?.errors?.password === undefined ? '' : 'Du skal udfylde et adgangskode'
                                // formState?.errors?.fields?.password?._errors[0]
                            }
                    </span>
                    <Button
                        text={isPending ? "Logger ind" : "Log ind"}
                        disabled={isPending}
                    />
                    <span>
                        { formState?.error === undefined ? '' : formState?.error as string}
                    </span>
                </form>
            </section>

            <Image
                alt={'Background splash image'}
                src={SplashImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    zIndex: -10
                }}
            />

            <div className="login-page-main__background-overlay">
                
            </div>
        </main>
    )
}