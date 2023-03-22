import { AppProps } from "next/app"
import Head from "next/head"

import { ERole } from "@config/constants"
import AuthGuard from "src/guard/authGuard"
import MainGuard from "src/guard/mainGuard"
import RootProvider from "src/RootProvider"

if (process.env.NEXT_PUBLIC_NODE_ENV != "development") {
  // eslint-disable-next-line no-console, @typescript-eslint/no-empty-function
  console.log = () => {}
}

const Meta = (
  <Head>
    <title>APT template</title>
  </Head>
)

function MyApp(
  props: AppProps & {
    Component: {
      role: ERole
    }
  }
) {
  const { Component, pageProps } = props

  const Guard = (() => {
    const currentRole = Component.role || null
    switch (true) {
      case currentRole == ERole.ADMIN:
        return MainGuard
      default:
        return AuthGuard
    }
  })()

  const App = (
    <Guard>
      <Component {...pageProps} />
    </Guard>
  )

  return (
    <RootProvider>
      {Meta}
      {App}
    </RootProvider>
  )
}

export default MyApp
