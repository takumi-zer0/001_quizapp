import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import Header from './components/Header'
import Quiz from './components/Quiz'

import Home from './index'

export default function highscore() {
    Home.

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Header time={0} />
            <Board />
        </div>

    )
}
function Board() {
    return (
        <div className="p-10 border-2 rounded-lg shadow-sm">
                    <h1 className="font-bold mb-1">Highscores</h1>
                    <p className="mb-1">Try to answer to following code-related questions within the time limit.</p>
                    <p className="mb-2">Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
                    <button onClick={() => { setStage(2) }} className="p-2 rounded-lg bg-green-500 text-white text-xs">Start Quiz</button>
        </div>
    )
}