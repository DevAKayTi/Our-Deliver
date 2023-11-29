import { NextPageWithLayout } from '@/types'
import type { AppProps } from 'next/app'

import '@/assets/css/main.css'

const Noop: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <>{children}</>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = (Component as any).layout || Noop;
  const authProps = (Component as any).authenticate;
  const getLayout = Component.getLayout ?? ((page)=> page)

  return(
    <>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App;
