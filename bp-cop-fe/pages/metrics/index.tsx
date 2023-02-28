import { makeStyles } from "tss-react/mui"
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer, YAxis, Legend } from "recharts"
import BloodPressureGraph from "./BloodPressureGraph";

const useStyles = makeStyles()({
    metricsContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    charts: {
        display: 'flex',
        height: '100%',
        width: '100%',
        marginTop: 25,
        flexDirection: 'column'
    }
})

export default function () {
    const { classes } = useStyles()

    return (
        <div className={classes.metricsContainer}>
            <div className={classes.charts}>
                <BloodPressureGraph />
            </div>
        </div>
    )
}