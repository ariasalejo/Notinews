import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NotiNews | Noticias inteligentes y en tiempo real</title>
        <meta name="description" content="Mantente informado con las últimas noticias de tecnología, economía y más. Actualización constante con Currents API." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white font-sans">
        <Component {...pageProps} />
      </main>
    </>
  )
}
