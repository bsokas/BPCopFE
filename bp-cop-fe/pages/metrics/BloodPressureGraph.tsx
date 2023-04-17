import { formatDateValue } from '@/shared/helpers'
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, ReferenceLine, Tooltip, Legend } from 'recharts'
import useSWR, { Fetcher } from 'swr'
import { makeStyles } from 'tss-react/mui'
import { BloodPressureReading, BloodPressureReadings } from './types'

const bloodPressureEndpoint = `http://${process.env.NEXT_PUBLIC_SERVER_HOST}/${process.env.NEXT_PUBLIC_BLOOD_PRESSURE_ENDPOINT}`
const fetcher: Fetcher<BloodPressureReadings, string> = (url: string) => fetch(url).then<BloodPressureReadings>(res => res.json())

const useStyles = makeStyles()({
    customTooltip: {
        width: 'max-content',
        height: 'auto',
        padding: 4,
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        gap: 4,
    },
    systolicText: { color: 'red' },
    diastolicText: { color: 'purple' }
})

// payload will have 2 entries, first one is what's needed
function BloodPressureTooltip({ active, payload }: { active?: boolean, payload: any }) {
    const { classes } = useStyles()

    if (!active || !payload || !payload.length) return null

    const { recordedAt, systolicMMHg, diastolicMMHg, heartRateBpm } = payload[0].payload as BloodPressureReading
    return (
        <div className={classes.customTooltip}>
            <p><b>Taken on: </b>{formatDateValue(recordedAt)}</p>
            <p className={classes.systolicText}><b>Systolic: </b>{systolicMMHg}</p>
            <p className={classes.diastolicText}><b>Diastolic: </b>{diastolicMMHg}</p>
            <p><b>Heart Rate: </b>{heartRateBpm} bpm</p>
        </div>
    )
}

export default function BloodPressureGraph() {
    const { data, error } = useSWR<BloodPressureReadings, Error>(bloodPressureEndpoint, fetcher)

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
                    <Tooltip content={(props) => <BloodPressureTooltip active={props.active} payload={(props.payload as unknown) as BloodPressureReading[]} />} />
                    <Legend />
                    <Line type="monotone" dataKey="systolicMMHg" strokeWidth={3} stroke="blue" />
                    <Line type="monotone" dataKey="diastolicMMHg" strokeWidth={3} stroke="purple" />
                    <ReferenceLine label="Systolic max" y={130} />
                    <ReferenceLine label="Diastolic max" y={80} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}