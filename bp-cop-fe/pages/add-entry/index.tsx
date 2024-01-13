import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { makeStyles } from "tss-react/mui"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


const useStyles = makeStyles()({
    entryContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        margin: '16px 8px',
        height: '100%'
    },
    form: {
        display: 'flex',
        paddingBottom: 0,
        width: '50%',
        gap: 8
    },
    recordedAtContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    button: {
        width: '25%',
    }
})

export default function AddEntry() {
    const { classes } = useStyles()

    // TODO use a form group
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <div className={classes.entryContainer}>
                <FormGroup className={classes.form}>
                    <TextField id="systolic" label="Systolic reading (top number)" type="number" required />
                    <TextField id="diastolic" label="Diastolic reading (bottom number)" type="number" required />
                    <TextField id="heart-rate-bpm" label="Heart Rate (bpm)" type="number" />
                    <DateTimePicker label="Recorded on" />
                    {/* triple reading flag */}
                    <FormControlLabel label="Triple (Sprint) reading" control={<Checkbox defaultChecked />} />
                    {/* Notes  */}
                    <TextField id='entry-notes' label="Additional details" multiline minRows={5} />
                </FormGroup>
                <Button className={classes.button} variant='contained'>Add new reading</Button>
            </div>
        </LocalizationProvider>
    )
}