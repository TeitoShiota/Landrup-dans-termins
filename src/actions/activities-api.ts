'use server'

//TODO - Change to ENV variables for production
const apiEndpoint = 'http://localhost:4000/api/v1/';

/**
 * 
 * @param activityId 
 * @returns Promise<[LandrupDansApiActivityObject]>
 */
export async function getActivities() : Promise<[LandrupDansApiActivityObject]>{
    try{
        const response = await fetch( `${ apiEndpoint }activities` )

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch activities');
        }

        return data;

    } catch ( error ) {
        throw new Error('Internal server error: ' + error)
    }
}

/**
 * 
 * @param activityId 
 * @returns Promise<LandrupDansApiActivityObject>
 */
export async function getActivity( activityId : string ) : Promise<LandrupDansApiActivityObject>{
    try{
        const response = await fetch( `${ apiEndpoint }activities/${ activityId }` )

        const data = await response.json() as LandrupDansApiActivityObject;

        if (!response.ok) {
            throw new Error('Failed to fetch activity');
        }

        return data;

    } catch ( error ) {
        throw new Error('Internal server error: ' + error)
    }
}