import React from 'react'
import Head from 'next/head'
import GameBoard from '../components/GameBoard'

import styles from '../styles/Game.module.css'

import Footer from '../components/Footer'

export default function Game() {
  return (
    <div className="w-screen h-auto">
      <header className="flex w-full h-auto justify-center items-center mt-32">
        <p className="text-3xl text-center font-bold">
          NBA Top Shot: Deal or No Deal
        </p>
      </header>

      <GameBoard />

      <Footer />
    </div>
  )
}
