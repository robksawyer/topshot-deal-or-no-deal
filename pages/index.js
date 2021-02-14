import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ImageUploadForm from '../components/ImageUploadForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-screen h-auto flex justify-center items-center flex-col">
      <Head>
        <title>Deal or No Deal / Top Shot Edition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col w-full justify-center items-center mt-32">
        <p className="text-8xl text-center uppercase font-black leading-12 text-white">
          Deal or No Deal
        </p>
        <div className="text-3xl text-center uppercase flex w-auto items-center justify-center">
          <img
            src="/img/top-shot-logo-horizontal-white.svg"
            alt="NBA Top Shot logo"
            className="w-auto h-16"
          />{' '}
          <p className="right-0 bg-accent0 py-2 px-4 tracking-widest uppercase text-white h-auto ml-6">
            Edition
          </p>
        </div>
      </header>

      <div className="mt-16 text-white text-sm text-left max-w-7xl mx-auto w-full">
        <p className="uppercase text-lg font-medium leading-10">
          Getting started
        </p>
        <p className="">
          1. Enter seven(7) moments that you&apos;d like included in the wager.
          2. Click submit and we handle the rest.
        </p>
        <p className="border-2 border-white p-6 mt-12 max-w-3xl mx-auto">
          We take care of randomly organizing the moments that you&apos;ve
          selected into a grid. Besides this, we also handle finding the lowest
          ask value of each in order to ensure the Deal or No Deal game logic
          works.
        </p>
      </div>

      {/* <ImageUploadForm className="py-12" /> */}

      <a
        href="/game"
        className="text-white text-center border-white border-2 py-4 px-12 my-12 hover:opacity-90 duration-500 ease-in-out transition uppercase tracking-widest text-sm"
      >
        Submit
      </a>

      <Footer />
    </div>
  )
}
