import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import Header from './components/Header'
import Quiz from './components/Quiz'



export default function Home() {
    const [time, setTime] = useState(50)
    const [stage, setStage] = useState(1)
    //1:intro 2:quiz part 3: all done
    const [score, setScore] = useState([["tu", 50], ["fd", 34], ["ye", 100], ["ss", 2]])
    const [start, setStart] = useState(0)


    useEffect(() => {
        console.log("ste-----------------")
        if(stage == 2){
            if(start === 0){
                setTime(50)
                setStart(1)
            }
            setTimeout(() => {
                setTime(prev => prev - 1)
            }, 1000)
        }
        if(stage == 2 && time <= 0) {
            setStart(0)
            setTime(0)
            setStage(3)
            clearTimeout()
        }
        if(stage != 3){
            clearTimeout()
        }
    }, [time]);



    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Header time={time} setTime={setTime} setStage={setStage}/>
            <Quiz time={time} setTime={setTime} stage={stage} setStage={setStage} setScore={setScore} score={score}/>
        </div>
    )
}
