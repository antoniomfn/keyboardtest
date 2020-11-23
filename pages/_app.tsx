import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import '../styles/index.css'
import '../styles/keyboard.css'
import '../styles/components/keycap.css'
import '../styles/components/main_ptbr.css'
import '../styles/components/scrollpad.css'
import '../styles/components/numpad.css'

import * as gtag from '../lib/gtag'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: String) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
