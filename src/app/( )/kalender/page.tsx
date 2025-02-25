import { getSessionFromCookies } from "@/lib/cookies";

// Components
import PageHeading from "@/components/PageHeading";

//Styles
import './kalender-page-style.scss'
import UserCalendar from "@/containers/UserCalendar";
import InstructorCalendar from "@/containers/InstructorCalendar";

export default async function CalendarPage() {

    const userSession = await getSessionFromCookies();

    if ( userSession?.role === 'instructor' ) {
        return (
            <main className="calendar-page-main">
                <PageHeading text="Kalender" />
                <InstructorCalendar userSession={ userSession } />
            </main>
        )
    } else if ( userSession?.role === 'default' ) {
        return (
            <main className="calendar-page-main">
                <PageHeading text="Kalender" />
                <UserCalendar userSession={ userSession } />
            </main>
        )
    } else {
        return (
            <main className="calendar-page-main">
                <PageHeading text="Kalender" />
                <p>
                    Unable to determine user role
                </p>
            </main>
        )
    }
}