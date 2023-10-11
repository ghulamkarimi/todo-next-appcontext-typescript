
"use client"
import { AppContext } from "@/AppContext"
import { useContext } from "react"
import DarkMode from '@/components/DarkMode'
import React from 'react'
import TopForm from "@/components/TopForm"
import Item from "@/components/Item"

const page = () => {
  const { theme} = useContext(AppContext);
  return (
    <div className={`h-screen flex w-full items-center pt-24 gap-6 flex-col  ${theme ? "bg-blue-300" : "bg-slate-400"}`}>
      <DarkMode />
      <TopForm />
      <Item />
    </div>
  )
}

export default page
