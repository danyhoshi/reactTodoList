import React from 'react'
import { createContext} from "react"
import { useState, useEffect } from 'react';
import {tasks as data}  from '../tasks.ts' //rfce es el comando para las importanciones

export interface Task {
  id: string,
  title: string,
  finish: boolean
}

interface Props { //aqui defino todos los tipos de las Props que necesito recibir
  children: React.ReactNode,
}

export type TodoContextType = {
  tasks: Array<Task>,
  createTask: ( task: Task) => void,
  deleteTask: (taskId: string) => void
}

export const TaskContext = createContext<TodoContextType | null>(null);//retorna un objeto, es como el nombre del contexto
export const TaskContextProvider = ({ children }: Props) => { // este componente proveerá del estado de padre a los componentes hijos

    //let value = 20;
    const [tasks, setTasks] = useState<Array<Task>>([]) //usestate snippet, escribe el nombre y tab
  
    useEffect(() => {
      setTasks(data)
    
      // return () => {
        
      // }
    }, [])
    
    const createTask = (task: Task) => {
      setTasks(prevTasks => [...prevTasks, task])
    }

    const deleteTask = (taskId: string) => {
      setTasks(prevTasks => prevTasks.filter(( t ) => { return (t.id != taskId) && t }))
    }
  return (
    
    <>
        <TaskContext.Provider value = { 
          {
            tasks,
            createTask,
            deleteTask
          }
        }> {/* Este es el componente que es contenedor del resto de componentes, el que proveera de estados */}
             { children } {/* ASI CREO UN COMPONENTE QUE RECIBIRA OTROS COMPONENNTES HIJOS*/}
        </TaskContext.Provider>
    </>
  )
}

