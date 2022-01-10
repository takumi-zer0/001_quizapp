import { useEffect, useState } from "react"

function Quiz({ time, setTime, stage, setStage, setScore, score}) {
    const [name, setName] = useState("")

    switch (stage) {
        case 1:
            return (
                <div className="p-10 border-2 rounded-lg shadow-sm">
                    <h1 className="font-bold mb-1">Coding Quiz Challenge</h1>
                    <p className="mb-1">Try to answer to following code-related questions within the time limit.</p>
                    <p className="mb-2">Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
                    <button onClick={() => { setStage(2); setTime(50) }} className="p-2 rounded-lg bg-green-500 text-white text-xs">Start Quiz</button>
                </div>
            )
            break
        case 2://timer start
            return (
                <Question setStage={setStage} setTime={setTime}/>
            )
            break
        case 3:
            return (
                <div className="p-10 border-2 rounded-lg shadow-sm">
                    <h1 className="font-bold mb-1">All done!</h1>
                    <p>Your final score is {time}.</p>
                    <div className="flex flex-row align-middle items-center">
                        <p>Enter initials: </p>
                        <input onChange={(input) => setName(input.target.value)} value={name} className="m-1 w-20 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 border-2" maxLength={2} autoCapitalize={"characters"} type="text" />
                        <button onClick={() => {
                            setScore(e =>  [...e, [name, time]])
                            setStage(1)
                        }} className="p-2 rounded-lg bg-green-500 text-white text-xs">Submit</button>
                    </div>
                </div>
            )
            break
        case 4:
            return(
                    <Score setStage={setStage} score={score} setScore={setScore}/>
            )
            break
        default:
            return (
                <div>error</div>
            )
    }
}

function order (score){
    function sorting(a, b){
        if(a[1] > b[1]){
            return -1
        }
        if(a[1]<b[1]){
            return 1
        }
        return 0
    }
    score.sort(sorting)
}

function Score({setStage, score, setScore}){
    order(score)

    return (
                    <div className="p-10 border-2 rounded-lg shadow-sm">
                    <h1 className="font-bold mb-1">Highscores</h1>
                    {score.map((item, key) => {
                        return(
                        <p id={key}>{key + 1}: {item[0]} - {item[1]}</p>
                        )
                    })}
                    <button onClick={() => { setStage(1) }} className="p-2 rounded-lg bg-green-500 text-white text-xs">Go Back</button>
                    <button onClick={() => { setScore([]) }} className="p-2 rounded-lg bg-green-500 text-white text-xs ml-3">Clear Highscores</button>
                    </div>
    )
}

function Question({ setStage, setTime }) {
    const [num, setNum] = useState(0)
    const [result, setResult] = useState()
    const [ans, setAns] = useState()

    const checkAnswer = (option) => {
        if(option === questions[num].answer){
            setAns("correct")
        }
        else{
            setTime(e => e - 10)
            setAns("incorrect")
        }

    }

    return (
        <div>
            <h1 className="font-bold mb-1">{questions[num].questionText}</h1>
            <div className="flex flex-col">
                <button onClick={() => {
                    checkAnswer(questions[num].options[0])
                    if (num == 4) {
                        console.log("fdsfds")
                        setStage(3)
                        setNum(0)
                        clearTimeout()
                    } else {
                        setNum(e => e + 1)
                    }
                }} className="mt-3 p-2 rounded-lg bg-green-500 text-white text-xs">{questions[num].options[0]}</button>
                <button onClick={() => {
                    checkAnswer(questions[num].options[1])
                    if (num == 4) {
                        setStage(3)
                        setNum(0)
                        clearTimeout()
                    } else {
                        setNum(e => e + 1)
                    }
                }} className="mt-3 p-2 rounded-lg bg-green-500 text-white text-xs">{questions[num].options[1]}</button>
                <button onClick={() => {
                    checkAnswer(questions[num].options[2])
                    if (num == 4) {
                        setStage(3)
                        setNum(0)
                        clearTimeout()
                    } else {
                        setNum(e => e + 1)
                    }
                }} className="mt-3 p-2 rounded-lg bg-green-500 text-white text-xs">{questions[num].options[2]}</button>
                <button onClick={() => {
                    checkAnswer(questions[num].options[3])
                    if (num == 4) {
                        setStage(3)
                        setNum(0)
                        clearTimeout()
                    } else {
                        setNum(e => e + 1)
                    }
                }} className="mt-3 p-2 rounded-lg bg-green-500 text-white text-xs">{questions[num].options[3]}</button>
            </div>
            <hr className="mt-2" />
            <p>{ans}</p>
        </div>
    )
}

const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];

export default Quiz
