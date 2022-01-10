import React, {useContext, useState} from 'react'
import Header from './components/Header'

const AppContext = React.createContext()

export function AppContextProvider({children}){
    const [time, setTime] = useState("sdds")
    const [stage, setStage] = useState(0)
    const score = [ ["TU", 30]]

    return (
        <AppContext.Provider time={time}>
            <Header/>
        </AppContext.Provider>
    )
    
}