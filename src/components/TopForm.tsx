"use client"
import { AppContext } from '@/AppContext'
import React, { useContext } from 'react'

const TopForm = () => {
    const { inputValue, getInputValue, addItems, theme } = useContext(AppContext)

    return (
        <div className={`px-6 py-8 rounded-xl flex justify-between ${theme ? "bg-blue-400" : "bg-slate-600"}`}>
            <div className='bg-gray-200 w-full rounded-xl flex justify-between'>
                <input
                    className='bg-transparent outline-none pl-2 w-full'
                    value={inputValue}
                    onChange={getInputValue}
                    type="text"
                    placeholder='add task' />
                <button className='border-l-2 border-black p-4 bg-gray-400 rounded-xl  justify-end' onClick={addItems}>Add</button>
            </div>
        </div>
    )
}

export default TopForm
