import { useRouter } from 'next/navigation'
import React from 'react'
import { useTasks } from '@/context/TaskContext'

function TaskCard({id, title, desc}) {
  const router = useRouter()

  const { deleteTask } = useTasks()


if(title == undefined) {
  return <div></div>
}

  return (
          <div style={{background:"#000", color:"white"}}>
            <div onClick={()=> router.push(`/edit/${id}`)}>
              <h1>{title}</h1>
              <p>{desc}</p>

              <button onClick={(e)=> {
                e.stopPropagation()
                const confirm = window.confirm("are you sure?")
                if(confirm)deleteTask(id)
                }}>x</button>
            </div>
                
            </div>
  )
} 

export default TaskCard