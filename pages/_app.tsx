import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/index.css'
import '../styles/keyboard.css'
import '../styles/components/keycap.css'
import '../styles/components/main_ptbr.css'
import '../styles/components/scrollpad.css'
import '../styles/components/numpad.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
