'use server';

import { z } from "zod"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const authEndpoint = 'http://localhost:4000/auth/token'


/**
 * Handles the login form action by validating the form data and sending a login request to the authentication endpoint.
 * 
 * @param state - The current state, which can be void or null.
 * @param payload - The payload containing the form data.
 * @returns A promise that resolves to void.
 * 
 * @throws Will throw an error if the form validation fails.
 * @throws Will throw an error if the login request fails.
 * 
 * The function performs the following steps:
 * 1. Extracts the username and password from the form data.
 * 2. Validates the form fields using a Zod schema.
 * 3. Sends a POST request to the authentication endpoint with the username and password.
 * 4. Handles different response statuses, throwing errors for unsuccessful login attempts.
 * 5. Stores the session data in cookies if the login is successful.
 * 6. Redirects to the home page upon successful login.
 */
export async function loginFormAction( state: void | null, payload: unknown ) : Promise<void>{
    'use server'
    const formData = payload as FormData
    const username = formData.get("username")
    const password = formData.get("password")


    // Validate form fields
    const schema = z.object({
        username: z.string().min(1, {message: "Du skal udfylde et brugernavn"}), //min 1 tegn langt, laver vi ikke egen costume beskeder, så bruger zod standard engelske beskeder
        password: z.string().min(1, {message: "Du skal udfylde et adgangskode"})
    })

    const validate = schema.safeParse({
        username,
        password
    })

    if(!validate.success){ // returns an error if the form validation wasn't succesful
        throw new Error( JSON.stringify(validate.error.format()) )
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
                    "password": password
                })
            }
        )

        if ( response.status === 401 ){
            throw new Error (`Incorrect username or password\n ${response?.statusText} \n Error code: ${ response?.status }`)
        }

        if (!response.ok){
            throw new Error( response?.statusText )
        }

        const data : LandrupDansApiSessionObject = await response.json()

        const cookieStore = await cookies();
        cookieStore.set('session', JSON.stringify(data), { maxAge: data?.validUntil})
    } catch ( error ) {
        throw new Error ( `Something went wrong with the login: \n ${error}` )
    }

    redirect( '/aktiviteter' )
}