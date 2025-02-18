'use client'
import { useActionState, useEffect } from "react"

import { loginFormAction } from "@/actions/authentication";

import Image from "next/image";
import Button from "@/components/Button";

// Styles
import './login-page-style.scss'

// Assets
import SplashImage from '@/assets/splash-image.jpg'

export default function LoginPage(){

    const [formState, formAction, isPending] = useActionState(loginFormAction, null)

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
                        placeholder="brugernavn"
                        // defaultValue={formState?.username}
                        />
                    <input
                        type="password"
                        name="password"
                        placeholder="adgangskode"
                        // defaultValue={formState?.password} 
                        />
                    <Button
                        text={isPending ? "Logger ind" : "Log ind"}
                        disabled={isPending}
                        />
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