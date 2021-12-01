import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '../layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  
    <Head>
    </Head>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  </>
}

export default MyApp
