import Head from 'next/head'
import GameBoard from '../components/GameBoard'

import styles from '../styles/Game.module.css'

export default function Game() {
  return (
    <div className="w-screen h-auto">
      <header className="flex w-full h-auto justify-center items-center">
        <p className="text-3xl text-center">NBA Top Shot: Deal or No Deal</p>
      </header>

      <GameBoard />

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
