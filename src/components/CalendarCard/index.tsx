import Link from "next/link"

// Styles
import './calendar-card-style.scss'

export default async function CalendarCard({
    activity
} : {
    activity : LandrupDansApiActivityObject
}) {

    return (
        <Link
            href={`/aktivitet/${activity?.id}/hold-oversigt`}
            className="calendar-card"
        >
            <h3 className="calendar-card__heading">{ activity?.name }</h3>
            <p>{ activity?.weekday } { activity?.time }</p>
        </Link>
    )
}