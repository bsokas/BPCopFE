import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, ReferenceLine, Tooltip, Legend } from 'recharts'
import useSWR, { Fetcher } from 'swr'
import { BloodPressureReadings } from './types'

const bloodPressureEndpoint = `http://${process.env.NEXT_PUBLIC_SERVER_HOST}/${process.env.NEXT_PUBLIC_BLOOD_PRESSURE_ENDPOINT}`
const fetcher: Fetcher<BloodPressureReadings, string> = (url: string) => fetch(url).then<BloodPressureReadings>(res => res.json())

export default function BloodPressureGraph() {
    const { data, error } = useSWR<BloodPressureReadings, Error>(bloodPressureEndpoint, fetcher)
    const formatDateTick = (value: string) => {
        const asDate = new Date(value)
        return `${asDate.getMonth()}/${asDate.getDate()}/${asDate.getFullYear()}`
    }

    if (error) {
        return (
            <>
                <h3>ERROR</h3>
                <h4>{error.message}</h4>
            </>
        )
    }

    return (
        <>
            <ResponsiveContainer width={"100%"} height={500} >
                <LineChart width={800} height={600} data={data?.readings}>
                    <XAxis dataKey={'recordedAt'} /*tickFormatter={formatDateTick}*/ />
                    <YAxis domain={[0, 200]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="systolicMMHg" strokeWidth={3} stroke="red" />
                    <Line type="monotone" dataKey="diastolicMMHg" strokeWidth={3} stroke="purple" />
                    <ReferenceLine label="Systolic max" y={130} />
                    <ReferenceLine label="Diastolic max" y={80} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}