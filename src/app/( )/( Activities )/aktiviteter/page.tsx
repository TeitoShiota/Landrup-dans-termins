// Components
import PageHeading from "@/components/PageHeading";

//Styles
import './aktiviteter-style.scss'
import ActivityCard from "@/components/ActivityCard";

// Actions
import { getActivities } from "@/actions/activities-api";


export default async function AktiviteterPage(){
    const activities = await getActivities();


    return (
        <main className="activities-page-main">
            <PageHeading text="Aktiviteter" />
            {
                activities?.map(( item ) => {
                    return (
                        <ActivityCard activity={ item } key={ item.id }/>
                    )
                })
            }
        </main>
    )
}