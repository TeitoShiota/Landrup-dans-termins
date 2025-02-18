import Image from "next/image";
// Components
import { getActivity } from "@/actions/activities-api";
import PageHeading from "@/components/PageHeading";


// Styles
import './aktivitet-style.scss';
import ActivitySignupButton from '@/components/ActivitySignupButton'

export default async function AktiviteterPage({
    params
} : {
    params: Promise<{ activityId : string }>
}){

    const activityId = ( await params )?.activityId as string;

    try{
        const activity = await getActivity( activityId );
        
        const activityAge = `${ activity?.minAge }-${ activity?.maxAge } år`

        return (
            <main className="activity-page-main">
                <section className="activity-page-main__hero">
                    <ActivitySignupButton
                        activityId={activityId}
                    />
                    <Image
                        alt={`Picture of dans practice for the ${ activity?.name } team.`}
                        src={`${ activity?.asset?.url }`}
                        // placeholder="blur"
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </section>
                <section className="activity-page-main__content">
                    <PageHeading text={activity?.name} />
                    <div>
                        <p>{ activityAge }</p>
                        <p>{ activity?.weekday } kl.{ activity?.time }</p>
                    </div>
                    <p>{ activity?.description }</p>
                </section>
            </main>
        )
    } catch ( error ) {
        return (
            <main>
                <PageHeading text={error?.message} />
            </main>
        )
    }
    
}