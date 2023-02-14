import { makeStyles } from "tss-react/mui"
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer, YAxis, Legend } from "recharts"

const useStyles = makeStyles()({
    metricsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    charts: {
        display: 'flex',
        height: '100%',
        marginTop: 25,
        flexDirection: 'column'
    }
})

const data = [
    {
        name: 'Day 1',
        systolicMMHg: 128,
        diastolicMMHg: 75,
        amt: 2400,
    },
    {
        name: 'Day 2',
        systolicMMHg: 127,
        diastolicMMHg: 71,
        amt: 2210,
    },
    {
        name: 'Day 3',
        systolicMMHg: 123,
        diastolicMMHg: 75,
        amt: 2290,
    },
    {
        name: 'Day 4',
        systolicMMHg: 128,
        diastolicMMHg: 79,
        amt: 2000,
    },
    {
        name: 'Day 5',
        systolicMMHg: 133,
        diastolicMMHg: 79,
        amt: 2181,
    },
    {
        name: 'Day 6',
        systolicMMHg: 124,
        diastolicMMHg: 73,
        amt: 2500,
    },
    {
        name: 'Day 7',
        systolicMMHg: 139,
        diastolicMMHg: 79,
        amt: 2100,
    },
];

export default function () {
    const { classes } = useStyles()

    return (
        <div className={classes.metricsContainer}>
            {/* <h1>Metrics</h1> */}
            <div className={classes.charts}>
                <LineChart
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="systolicMMHg" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" width={20} dataKey="diastolicMMHg" stroke="orange" />
                </LineChart>
            </div>
        </div>
    )
}