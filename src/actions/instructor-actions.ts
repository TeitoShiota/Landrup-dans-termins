import { getActivities } from "@/actions/activities-api";

export async function getInstructorActivities(
    instructorId : string,
) : Promise< LandrupDansApiActivityObject[] | undefined> {
    try {

        const instructorActivities: LandrupDansApiActivityObject[] = (await getActivities()).filter(
            (activity: LandrupDansApiActivityObject) => activity.instructorId === instructorId
        )
        

        return await instructorActivities

    } catch ( error ) {
        throw new Error ( `Failed to fetch activities - ${ error }` )
    }
}