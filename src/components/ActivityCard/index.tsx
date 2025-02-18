import Image from "next/image";
import Link from "next/link";



// Styles
import './activity-card.scss'

//TODO - Remove static data and implement dynamic data
export default function ActivityCard({
    activity,
} : {
    activity: LandrupDansApiActivityObject;
}){
    const activityAge = `${ activity?.minAge }-${ activity?.maxAge } år`

    return (
        <Link
            href={`/aktivitet/${ activity?.id }`}
            className="activity-card"
        >
            <div className="activity-card__content">
                <p>{ activity?.name }</p>
                <p>{ activityAge}</p>
            </div>

            <Image
                className="activity-card__image"
                alt={`Picture of dans practice for the ${ activity?.name } team.`}
                src={ activity?.asset?.url }
                // placeholder="blur"
                quality={100}
                sizes='100vw'
                fill={true}
            />
        </Link>
    )
}