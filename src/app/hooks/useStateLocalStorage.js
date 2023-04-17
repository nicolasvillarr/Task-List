import { useEffect, useState } from "react"

export function useStateLocalStorage(key, inicialState) {
    const [state, setState] = useState(inicialState) //creo el estado


    useEffect(()=>{
        const item = localStorage.getItem(key) //key son las tasks
        if(item) setState(JSON.parse(item)) 
        // const tasks = JSON.parse(item)
        // if (tasks) setState(tasks)
    },[])   
    useEffect(()=>{
        if(state.length > 0) {
            localStorage.setItem(key, JSON.stringify(state))
        }
    },[state]) // cuando cambie guardo en el localStorage

    return [state, setState]
}

/*
    useEffect(()=> {
        const items = localStorage.getItem("tasks")
        const tasks = JSON.parse(items)
            if(tasks.length > 0)  
                setTasks(tasks) 
    },[])

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])
*/