import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div>
    <h1>Task List NextJs</h1>
        <Link href={"/newtask"}>
        <button>New Task</button> 
        </Link>
    </div>
  )
} 

export default NavBar