'use server'

export async function getUser(
    userId : string,
    token : string
) {
    try {
        const response = await fetch(
            `http://localhost:4000/api/v1/users/${userId}`,
            {
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ token }`
                },
            }
        )

        if( !response.ok ){
            throw new Error( 'Failed to fetch user data: \n\n Error: ' + response.statusText )
        }

        const user : LandrupDansApiUserObject = await response.json()
        return user

    } catch ( error ) {
        
    }
}

export async function getUserActivities(
    userId : string,
    token : string
) : Promise<[ LandrupDansApiActivityObject ] | undefined> {
    try {
        const user : LandrupDansApiUserObject | undefined = (await getUser( userId, token ))
        const userActivities = await user?.activities
        
        // if ( userActivities != undefined ){
        //     throw new Error ( 'Failed to fetch activities - Activities list is undefined' )
        // }

        return await userActivities

    } catch ( error ) {
        throw new Error ( `Failed to fetch activities - ${ error }` )
    }
}

export async function getUserRole(
    userId : string,
    token : string
) : Promise< string | undefined> {
    try {
        const user : LandrupDansApiUserObject | undefined = (await getUser( userId, token ))
        const userRole = await user?.role

        return await userRole

    } catch ( error ) {
        throw new Error ( `Failed to fetch activities - ${ error }` )
    }
}