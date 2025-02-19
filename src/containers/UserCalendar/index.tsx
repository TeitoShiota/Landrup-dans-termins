import { getUserActivities } from "@/actions/user-actions"

// Components
import CalendarCard from "@/components/CalendarCard";


export default async function UserCalendar(
    {
        userSession
    } : {
        userSession : LandrupDansApiSessionObject
    }
) {

    if ( userSession === undefined ) {
        throw new Error ( 'User session is undefined' )
    }

    const userActivities = await getUserActivities(
        (await userSession)?.userId,
        (await userSession)?.token
    );    
    

    return (
        <>
            {
                userActivities !== undefined && userActivities?.length >= 1?
                userActivities?.map(  (item) => {
                    return (
                        <CalendarCard activity={item} key={item?.id} />
                    )
                }) :
                <p>
                    Ingen aktiviterer fundet
                </p>
            }
        </>
    )
}