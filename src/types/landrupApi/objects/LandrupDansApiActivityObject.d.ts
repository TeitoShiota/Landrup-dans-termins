type Weekdays = 'Mandag' | 'Tirsdag' | 'Onsdag' | 'Torsdag' | 'Fredag' | 'Lørdag' | 'Søndag'


type LandrupDansApiActivityObject = {
    id: string,
    name: string,
    description: string,
    weekday: 
        Capitalize<Weekdays> | 
        Lowercase<Weekdays>,
    time: string,
    maxParticipants: number,
    minAge: number,
    maxAge: number,
    createdAt: string,
    updatedAt: string,
    instructorId: number,
    assetId: number,
    asset: {
        id: number,
        url: string,
        createdAt: string,
        updatedAt: string
    },
    users: [ LandrupDansApiUserObject ],
    getAgeRange: () => string;
}

//FIXME - Implement function for automatically generating the age range
LandrupDansApiActivityObject.prototype.getAgeRange = function() {
    return `${this.minAge}-${this.maxAge} aar`;
}