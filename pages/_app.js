import { useEffect } from "react"
import { getCookie, setCookie } from "cookies-next"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const value = getCookie("sample-cookie")
    console.log(`
      env: ${typeof window != "undefined" ? "client": "server"}
      cookie value: ${value}
    `)
  })

  return <Component {...pageProps} />
}

MyApp.getInitialProps = ({ ctx }) => {
  setCookie("sample-cookie", "1234", ctx)

  return {}
}

export default MyApp
