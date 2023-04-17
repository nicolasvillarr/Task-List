"use client"
import { useTasks } from '@/context/TaskContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Page({params}) {

  const router = useRouter()  
  const [tarea, setTarea] = useState({
    title:"",
    desc:""
  })
  const { tasks, createTask, updateTask } = useTasks()


  
  function handleChange(e) {
    setTarea({...tarea, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!tarea.title || !tarea.desc) {
      if (!tarea) return alert("both data are missing")
      if(!tarea.title){
        alert("a title is missing")
      } else (
        alert ("a description is missing")
      )
    } else {
      if (params.id) {
        console.log("edit")
        updateTask(params.id, tarea)
      } else {
        createTask(tarea.title, tarea.desc)
      }
      router.push("/")
    }
  }

  useEffect(()=> {
    if (params.id) {
      const encontreTarea = tasks.find(t => t.id === params.id)
      if(encontreTarea) setTarea({
        title: encontreTarea.title, 
        desc: encontreTarea.desc        
      })
    }
  }, [])
  
  return (
    <div>
    <Link href={"/"}>
      <h1>Go to home</h1>
    </Link>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={tarea.title} name='title' placeholder='write a title'/>
          <textarea onChange={handleChange} value={tarea.desc} name='desc' placeholder='write a task'/>
          <button>Save</button>
      </form>
    </div>
  )
}

export default Page