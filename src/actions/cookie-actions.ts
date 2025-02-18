'use server'

import { cookies } from 'next/headers';


export async function setSessionCookies( session: LandrupDansApiSessionObject ): Promise<void> {
    try {

        const cookieStore = await cookies();
        cookieStore.set('session', JSON.stringify(session), { maxAge: session?.validUntil })

    } catch ( error ) {
        console.error('Failed to set session cookies', error);
    }
}

export async function getSessionFromCookies() : Promise< LandrupDansApiSessionObject > {
    try {
        const cookieStore = await cookies();

        const session = JSON.parse(await cookieStore.get('session')?.value as string) as LandrupDansApiSessionObject
        
        return session
    } catch ( error ) {
        throw new Error(JSON.stringify( error ));
        
    }
}
