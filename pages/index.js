import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ImageUploadForm from '../components/ImageUploadForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-screen h-auto flex justify-center items-center flex-col ">
      <Head>
        <title>NBA Top Shot: Deal or No Deal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full justify-center items-center mt-32">
        <p className="text-3xl text-center">NBA Top Shot: Deal or No Deal</p>
      </header>

      <ImageUploadForm className="py-12" />

      <a
        href="/game"
        className="text-xl text-white text-center bg-black py-4 px-12 mb-12 hover:bg-opacity-75 duration-500 ease-in-out transition"
      >
        Skip
      </a>

      <Footer />
    </div>
  )
}
