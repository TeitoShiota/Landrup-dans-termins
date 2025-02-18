type LandrupDansApiSessionObject = {
    userId: string,
    token: string,
    role: "default" | "instructor",
    validUntil: number
}