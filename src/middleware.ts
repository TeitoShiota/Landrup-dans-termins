import { NextResponse, type NextRequest } from "next/server";
import { checkUserRole } from '@/lib/middleware/middlewareRoleCheck'
import { verifySession } from '@/lib/dal';


    
export default async function middleware(req: NextRequest): Promise<NextResponse<unknown>> {
    const response : NextResponse = NextResponse.next()
    
    const isAuth = await verifySession();
    
    // Checks if user is already logged in and forwards then to home at path 
    try {
        if ( isAuth && req.nextUrl.pathname === '/login' ){
            const url = req.nextUrl.clone()
            url.pathname = '/aktiviteter'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( `Failed to forward logged in user to /aktiviteter\n${ error }` );
    }


    try {
        if ( 
            !isAuth &&
            req.nextUrl.pathname == '/kalender' 
            // holdOversigtPathRegex.test( req.nextUrl.pathname as string )
        ){
            const url = req.nextUrl.clone()
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( `Failed to forward non logged in user to /login\n${ error }` );
    }

    // Check the UserRole of the hold-oversigt path
    try {
        if (
            isAuth  &&
            req.nextUrl.pathname.match(/^\/aktivitet\/.*\/hold-oversigt$/)
        ) {
            console.log('checking role')
            return checkUserRole(req)
        }
    } catch ( error ) {
        throw new Error( `Failed to check the users role \n${ error }` );
    }

    
    
    return response
}
    
// Routes Middleware should not run on
export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}

//NOTE - Old 
    // // Forward user to the login page if they are not logged in
    // try {
    //     if ( 
    //         req.nextUrl.pathname !== '/' &&
    //         req.nextUrl.pathname !== '/login' &&
    //         req.nextUrl.pathname == '/kalender' &&
    //         (req.nextUrl.pathname.match(/^\/aktivitet\/.*\/hold-oversigt$/)) &&
    //         !isAuth
    //     ){
    //         const url = req.nextUrl.clone()
    //         url.pathname = '/login'
    //         return NextResponse.redirect(url)
    //     }
    // } catch ( error ) {
    //     throw new Error( `Failed to forward non logged in user to /login\n${ error }` );
    // }
    // Forward user to the login page if they are not logged in