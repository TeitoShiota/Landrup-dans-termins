import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from '@/lib/dal';

export async function checkSession(request: NextRequest): Promise<NextResponse<unknown>> {
    const response : NextResponse = NextResponse.next({
        request
    })

    const isAuth = await verifySession();

    // Checks if user is already logged in and forwards then to home at path /
    try {
        if ( isAuth && request.nextUrl.pathname === '/login' ){
            const url = request.nextUrl.clone()
            url.pathname = '/'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( error );
    }


    try {
        if ( 
            request.nextUrl.pathname !== '/' &&
            request.nextUrl.pathname !== '/login' &&
            !isAuth
        ){
            const url = request.nextUrl.clone()
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( error );
    }


    return response
}