
"use client"

import { AppContext } from "@/AppContext"
import { useContext } from "react"
import { ImSun } from "react-icons/im"
import { BsFillMoonStarsFill } from "react-icons/bs"
const DarkMode = () => {
    const { theme, handlerTheme } = useContext(AppContext);
    return (
        <div className="flex bg-slate-300 p-4 gap-4 rounded-xl absolute top-6 right-12">
            <p>Theme</p>
            <ImSun className={`text-2xl text-yellow-500 `} onClick={handlerTheme} />
            <BsFillMoonStarsFill className={`text-2xl text-slate-700 `} onClick={handlerTheme} />

        </div>
    )
}

export default DarkMode
