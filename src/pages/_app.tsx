import '@/styles/globals.css'
import { NextPageWithLayout } from '@/types'
import type { AppProps } from 'next/app'


const Noop: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <>{children}</>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = (Component as any).Layout || Noop;
  const authProps = (Component as any).authenticate;

  return(
    <>
      {
        authProps ? (
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        )
      }
    </>
  )
}

export default App;
