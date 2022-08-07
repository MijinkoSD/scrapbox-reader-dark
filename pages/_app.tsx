import { AppProps } from 'next/app'
import Head from 'next/head'

import '../assets/app.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
