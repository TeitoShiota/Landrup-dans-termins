import { getActivities } from "@/actions/activities-api";
import PageHeading from "@/components/PageHeading";
import SearchContainer from "@/containers/SearchContainer";

import "./search-page-style.scss";

export default async function SearchPage() {

    const activities = await getActivities();

    return (
        <main className="search-page-main">
            <PageHeading text="Søg" />
            <SearchContainer searchData={ activities } />
        </main>
    )
}