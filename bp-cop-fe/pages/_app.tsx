import '@/styles/globals.css'
import { Button } from '@mui/material';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { makeStyles } from 'tss-react/mui';
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";

const {
  augmentDocumentWithEmotionCache,
  withAppEmotionCache
} = createEmotionSsrAdvancedApproach({ "key": "css" });

export { augmentDocumentWithEmotionCache };

const useStyles = makeStyles()({
  mainContainer: {
    padding: 8,
  },
  content: {
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

function App({ Component, pageProps }: AppProps) {
  const { classes } = useStyles()
  const router = useRouter()

  return (
    <main className={classes.mainContainer}>
      <div className={classes.navMenu}>
        <Button variant="contained" onClick={() => router.push("/metrics")}>Metrics</Button>
        <Button variant="contained">Add Entry</Button>
      </div>
      <div className={classes.content}>
        <Component {...pageProps} />
      </div>
    </main >
  )
}

export default withAppEmotionCache(App);
