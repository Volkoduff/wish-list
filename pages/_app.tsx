import '../styles/globals.scss'
import { AppProps } from 'next/app'
import Layout from "../components/layout/Layout";
import WishesContextProvider from "../store/wishes-context";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <WishesContextProvider>
        <Layout>
          <NextNProgress></NextNProgress>
          <Component {...pageProps} />
        </Layout>
      </WishesContextProvider>

  )
}

export default MyApp
