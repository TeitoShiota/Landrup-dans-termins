import 'server-only';

import { z } from "zod"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const authEndpoint = 'http://localhost:4000/auth/token'

export async function formActionWithValidation(
    state,
    formData
) {
    'use server';

    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Validate form fields using a Zod schema
    const schema = z.object({
        username: z.string({
            message: 'Username must be a string',
        }).min(3, {
            message: 'Username must be at least 3 characters long',
        }).max(50, {
            message: 'Username must be at most 50 characters long',
        }),
        password: z.string().min(8).max(50),
        confirmPassword: z.string().min(8).max(50).confirmPassword('password'),
        email: z.string().email(),
        phone: z.string().min(8).max(15)
    });

    const validationResult = schema.safeParse({
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        phone: phone
    });

    if (!validationResult.success) { // returns an error if the form validation wasn't successful
        return {
            formData: {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                email: email,
                phone: phone
            },
            errors: validationResult.error.format()
        };
    }

    try {
            const response = await fetch( 
                authEndpoint, 
                {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "username": username,
                        "password": password,
                        "confirmPassword": confirmPassword,
                        "email": email,
                        "phone": phone
                    })
                }
            )
    
            if ( response.status === 401 ){
                return {
                    formData: {
                        username: username,
                        password: password,
                        confirmPassword: confirmPassword,
                        email: email,
                        phone: phone
                    },
                    error: 'Incorrect username or password'
                }
            }
    
            if (!response.ok){
                return {
                    formData: {
                        username: fields?.username,
                        password: fields?.password
                    },
                    error: `An error occurred while logging in\n ${response?.statusText} \n Error code: ${ response?.status }`
                }
            }
    
            const data  = await response.json()
    
            // const cookieStore = await cookies();
            // cookieStore.set('session', JSON.stringify(data), { maxAge: data?.validUntil})
        } catch (error: Error | unknown) {
        throw new Error(`An error occurred while logging in\n ${error}`);
    }

    // redirect( '/aktiviteter' )
}