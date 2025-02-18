import { NextResponse, type NextRequest } from "next/server";

import { getUserRole, } from "@/actions/user-actions";
import { getSessionFromCookies } from "@/lib/cookies";

export async function checkUserRole(request: NextRequest): Promise<NextResponse<unknown>> {
    const response : NextResponse = NextResponse.next({
        request
    })
    try {
    const userSession = await getSessionFromCookies();
    if( !userSession ){
        throw new Error(`Failed to fetch user session\n${ userSession }`)
    }

    const userRole = await getUserRole(
        (await userSession)?.userId,
        (await userSession)?.token
    );
    if( !userRole ){
        throw new Error(`Failed to fetch user role\n${ userRole }`)
    }

        if (await userRole !== 'instructor') {
            console.log('User is not a instructor')
            const url = request.nextUrl.clone();
            url.pathname = url.pathname.replace('/hold-oversigt', '');
            return NextResponse.redirect(url);
        }
    } catch ( error ) {
        throw new Error( `Error:\n${error}` );
    }

    return response
}