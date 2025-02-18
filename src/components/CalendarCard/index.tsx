import Link from "next/link"

export default async function CalendarCard({
    activity
} : {
    activity : LandrupDansApiActivityObject
}) {

    return (
        <Link
            href={`/aktivitet/${activity?.id}/hold-oversigt`}
        >
            <h3>{ activity?.name }</h3>
            <p>{ activity?.weekday } kl.{ activity?.time }</p>
        </Link>
    )
}