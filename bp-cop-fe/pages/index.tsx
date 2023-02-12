import { Button } from '@mui/material'
import Head from 'next/head'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()({
    mainContainer: {
        padding: 8,
    },
    navMenu: {
        display: "flex",
        flexDirection: "row",
        gap: 8,

        '& .MuiButton-root': {
            backgroundColor: "#BF8B27",
            '&:hover': { backgroundColor: "#206CAO" }
        }
    }
})

export default function () {
    const { classes } = useStyles()

    return (
        <>
            <Head>
                <title>BP Cop App</title>
                {/* TODO need favicon */}
            </Head>
            <main>
                <h1>Main Screen</h1>
            </main>
        </>
    )
}