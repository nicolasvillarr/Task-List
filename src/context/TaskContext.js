"use client";
import { useStateLocalStorage } from "@/app/hooks/useStateLocalStorage";
import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTasks tendría que estar siendo usado dentro de un Provider");
  return context;
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useStateLocalStorage("tasks", [])
//  const [tasks, setTasks] = useState([]);

  const createTask = (title, desc) => {

    setTasks([...tasks, { title, desc, id: uuid() }]);
  };

  const deleteTask = (id) => {

    setTasks([...tasks.filter((e) => e.id !== id)]);
  };

  const updateTask = (id, newTaskUpdate) =>

    setTasks([
      ...tasks.map((t) => (t.id === id ? { ...t, ...newTaskUpdate } : t)),
    ]);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
