import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ImageUploadForm from '../components/ImageUploadForm'

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <Head>
        <title>NBA Top Shot: Deal or No Deal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full h-auto justify-center items-center">
        <p className="text-3xl text-center">NBA Top Shot: Deal or No Deal</p>
      </header>

      <ImageUploadForm />

      <footer className="w-full bg-black">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
