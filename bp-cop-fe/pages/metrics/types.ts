export interface BloodPressureReading {
    id: string,
    systolicMMHg: number,
    diastolicMMHg: number,
    heartRateBpm: number,
    tripleReading: boolean,
    createdAt: string, // TODO figure out how this is supposed to be parsed
    recordedAt: string,
    notes?: string
}

export interface BloodPressureReadings {
    readings: BloodPressureReading[]
}