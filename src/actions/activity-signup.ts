'use server'

import { getSessionFromCookies } from "./cookie-actions"
import { getUserActivities } from "./user-actions"

export async function checkUserActivitySignup( activityId : string ) {
    const {
        userId,
        token
    } = await getSessionFromCookies();

    if ( !userId && !token ){
        throw new Error( 'Cookies not found' )
    }

    const userActivities : [LandrupDansApiActivityObject] = await getUserActivities( userId, token );
    console.log(await userActivities)

    if( userActivities ){
        const signupStatus = (await userActivities.find((activity) => activity.id === activityId))
        if( signupStatus ){
            return true
        }
        return false
    }



}