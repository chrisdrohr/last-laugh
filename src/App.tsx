import React, {Suspense} from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'
import Header from 'components/Header'
import Body from 'components/Body'
import Loader from 'components/Loader'

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <Header />
          <Body />
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
