"use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import { useTasks } from '@/context/TaskContext'
import TaskCard from '@/components/TaskCard'

function Home() {

const {tasks} = useTasks()
  return (
    <div>
      <NavBar/>
      <div>
        {tasks.map((e, i)=> (
          <TaskCard key={i} id={e.id} title={e.title} desc={e.desc}/>  
          ))}
      </div>
    </div>
  )
}

export default Home