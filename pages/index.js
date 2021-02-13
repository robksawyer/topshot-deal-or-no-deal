import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ImageUploadForm from '../components/ImageUploadForm'

export default function Home() {
  return (
    <div className="w-screen h-auto flex justify-center items-center flex-col">
      <Head>
        <title>NBA Top Shot: Deal or No Deal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full h-auto justify-center items-center">
        <p className="text-3xl text-center">NBA Top Shot: Deal or No Deal</p>
      </header>

      <ImageUploadForm className="py-12" />

      <a
        href="/game"
        className="text-xl text-white text-center bg-black py-4 px-12 mb-12 hover:bg-opacity-75 duration-500 ease-in-out transition"
      >
        Skip
      </a>

      <footer className="w-full flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="w-24 h-auto" />
        </a>
      </footer>
    </div>
  )
}
