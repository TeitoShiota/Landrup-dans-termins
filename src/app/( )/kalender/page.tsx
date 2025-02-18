import { getUserActivities } from "@/actions/user-actions"
import { getSessionFromCookies } from "@/lib/cookies";

// Components
import CalendarCard from "@/components/CalendarCard";
import PageHeading from "@/components/PageHeading";

//Styles
import './kalender-page-style.scss'

export default async function CalendarPage() {

    const userSession = await getSessionFromCookies();

    const userActivities = await getUserActivities(
        (await userSession)?.userId,
        (await userSession)?.token
    );    

    return (
        <main className="calendar-page-main">
            <PageHeading text="Kalender" />
            {
                userActivities ?
                userActivities?.map(  (item) => {
                    return (
                        <CalendarCard activity={item} key={item?.id} />
                    )
                }) :
                <p>
                    Ingen aktiviterer fundet
                </p>
            }
        </main>
    )
}