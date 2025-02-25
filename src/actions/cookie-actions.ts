'use server'

import { cookies } from 'next/headers';


/**
 * Sets the session cookies with the provided session object.
 *
 * @param {LandrupDansApiSessionObject} session - The session object containing session details.
 * @returns {Promise<void>} A promise that resolves when the session cookies are set.
 * @throws Will log an error message if setting the session cookies fails.
 */
export async function setSessionCookies( session: LandrupDansApiSessionObject ): Promise<void> {
    try {

        const cookieStore = await cookies();
        cookieStore.set('session', JSON.stringify(session), { maxAge: session?.validUntil })

    } catch ( error ) {
        console.error('Failed to set session cookies', error);
    }
}

/**
 * Retrieves the session object from cookies.
 *
 * @returns {Promise<LandrupDansApiSessionObject>} A promise that resolves to the session object.
 * @throws {Error} If there is an error retrieving or parsing the session cookie.
 */
export async function getSessionFromCookies() : Promise< LandrupDansApiSessionObject > {
    try {
        const cookieStore = await cookies();

        const session = JSON.parse(await cookieStore.get('session')?.value as string) as LandrupDansApiSessionObject
        
        return session
    } catch ( error ) {
        throw new Error(JSON.stringify( error ));
        
    }
}
