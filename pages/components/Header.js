import Link from 'next/link'
import { useContext } from 'react'
import {AppContext} from '../AppContextProvider'


function Header({time, setTime, setStage}) {
    
    return (
        <div className="items-center fixed top-0 h-10 bg-green-500 w-full flex justify-between">
                <a className="ml-2 text-white cursor-pointer" onClick={() => setStage(4)}>
                    View Highscores
                </a>
            <p>

            </p>
            <div className="mr-3 text-white">
                Time: {time}
            </div>
        </div>
    )
}

export default Header
