"use client"
import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import { AppContext } from '@/AppContext';
const Item = () => {
    const { items, deleteItems, updateTodo, editToggleItem } = useContext(AppContext);
    return (
        <div className='flex flex-wrap gap-4 justify-center p-2' >
            {
                items.map((item) => (
                    <div className={`flex flex-col justify-between bg-gray-300 h-[150px] w-[250px] rounded-xl text-sm p-2   ${item.complete ? "border-l-8 border-r-8 border-yellow-500":"border-l-8 border-r-8 border-green-500"}`} key={item.id}>
                        <p className='font-bold container '>{item.title}</p>
                        <span className='flex items-center justify-center gap-6'>
                            <FaTrashAlt className="text-xl text-red-400 cursor-pointer" onClick={() => deleteItems(item.id)} />
                            <AiFillEdit className={`text-2xl text-yellow-500 cursor-pointer ${item.complete ? "hidden" : "flex"}`} onClick={() => editToggleItem(item.id)} />
                            <AiOutlineCheck className={`text-2xl text-green-500 cursor-pointer ${item.complete ? "flex" : "hidden"}`} onClick={() => updateTodo(item.id)} />
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Item
