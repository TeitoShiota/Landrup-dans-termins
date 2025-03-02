'use server';
import 'server-only';

import { z } from "zod"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const authEndpoint = 'http://localhost:4000/auth/token'


export async function formActionWithValidation(
    state: void | null,
    payload: Record<string, string>
): Promise<{
    formData: Record<string, string>;
    errors?: z.ZodFormattedError<Record<string, string>, string> | undefined;
    error?: z.ZodFormattedError<Record<string, string>, string> | string | undefined;
} | void> {
    'use server'
    const formData = payload as unknown as FormData;


    // assign the form fields to the fields object dynamically
    const fields = Object.fromEntries(
        formData
    ) as Record<string, string>;

    console.log('fields', fields);

        console.log(fields);
    // Validate form fields using a Zod schema
    const schema = z.record(
        z.unknown().superRefine((value, context) => {
            // Custom validation logic
            if (typeof value !== 'string' || value.length < 1) {
                context.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `${context.path[0]} must be a string and not empty`,
                });
            }
        })
    );

    const validationResult = schema.safeParse(fields);

    console.log(validationResult);

    if (!validationResult.success) { // returns an error if the form validation wasn't successful
        return {
            formData: fields,
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
                        "username": fields?.username,
                        "password": fields?.password
                    })
                }
            )
    
            if ( response.status === 401 ){
                return {
                    formData: {
                        username: fields?.username,
                        password: fields?.password
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
    
            const data : LandrupDansApiSessionObject = await response.json()
    
            // const cookieStore = await cookies();
            // cookieStore.set('session', JSON.stringify(data), { maxAge: data?.validUntil})
        } catch (error: Error | unknown) {
        throw new Error(`An error occurred while logging in\n ${error}`);
    }

    // redirect( '/aktiviteter' )
}