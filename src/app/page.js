"use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import { useTasks } from '@/context/TaskContext'
import TaskCard from '@/components/TaskCard'
import Link from 'next/link'

function Home() {

const {tasks} = useTasks()
  return (
    <div>
      <Link href={"/newtask"}>
        <button
          type="button"
          className="text-white transition duration-300 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          New Task
        </button>
      </Link>
      <div>
      {tasks.length === 0 ? (
        <div className='flex justify-center'>
        <h2 className="text-2xl">There are no tasks 📚</h2>
        </div>
      ) :
        <div className="w-7/10">
          {tasks.map((e, i) => (
            <TaskCard key={i} id={e.id} title={e.title} desc={e.desc} />
          ))}
        </div>
      } 
      </div>
    </div>
  );
}

export default Home