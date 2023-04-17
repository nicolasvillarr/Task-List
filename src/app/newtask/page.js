"use client"
import { useTasks } from '@/context/TaskContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
function Page({params}) {

  const router = useRouter()  
  const { tasks, createTask, updateTask } = useTasks()
  const { register, handleSubmit,setValue, formState:{errors}} = useForm()


  const onSubmit = handleSubmit((task)=>{
    if (params.id) {
      updateTask(params.id, task)
    } else {
      createTask(task.title, task.desc)
    }
    router.push("/")
   }) 

  useEffect(()=> {
    if (params.id) {
      const encontreTarea = tasks.find(t => t.id === params.id)
      if(encontreTarea) {
        setValue("title", encontreTarea.title)
        setValue("desc", encontreTarea.desc)
      }
    }
  }, [])
  
  return (
    <div>
      <Link href={"/"}>
        <h1>Go to home</h1>
      </Link>
      <form onSubmit={onSubmit}>
        <input
          placeholder="write a title"
          {...register("title", {required: true})}
        />
        {errors.title && (<span>this filed is required</span> )}
        <textarea
          placeholder="write a task"
          {...register("desc", {required: true})}
        />
        {errors.desc && (<span>this filed is required</span> )}

        <button>Save</button>
      </form>
    </div>
  );
}

export default Page