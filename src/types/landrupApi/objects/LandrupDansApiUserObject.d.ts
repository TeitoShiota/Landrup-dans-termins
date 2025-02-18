type LandrupDansApiUserObject = {
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    age: number,
    role: string,
    createdAt: string,
    updatedAt: string,
    roster: {
        createdAt: string,
        updatedAt: string,
        userId: number,
        activityId: number
    },
    activities: [LandrupDansApiActivityObject]
}