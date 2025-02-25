import { getInstructorActivities } from "@/actions/instructor-actions";

// Components
import CalendarCard from "@/components/CalendarCard";


export default async function InstructorCalendar(
    {
        userSession
    } : {
        userSession : LandrupDansApiSessionObject
    }
) {

    if ( userSession === undefined ) {
        throw new Error ( 'User session is undefined' )
    }

    const instructorActivities = await getInstructorActivities(
        (await userSession)?.userId,
    );    

    return (
        <>
            {
                instructorActivities ?
                instructorActivities?.map(  (item) => {
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