import { getActivity } from "@/actions/activities-api";

// Components
import PageHeading from "@/components/PageHeading"

// Style
import './hold-oversigt- page-style.scss'

export default async function HoldOversigtPage({
    params
} : {
    params: Promise<{ activityId : string }>
}){
    const activityId = ( await params )?.activityId as string;

    const activity = await getActivity( activityId );

    return (
        <main className="hold-oversigt-page-main">
            <PageHeading text={ activity?.name } />
            {
                activity?.users ? 
                activity?.users.map( ( user, index ) => {
                    return (
                        <p key={ index }>{ `${(
                            user?.firstname ? user?.firstname : ''
                        )} ${(
                            user?.lastname ? user?.lastname : ''
                        )}` }</p>
                    )
                }) : 'Ingen deltager'
            }
        </main>
    )
}