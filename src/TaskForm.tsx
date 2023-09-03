import React from 'react'
import { useState, useContext } from "react"
import { nanoid } from "nanoid"
import { TaskContext, TodoContextType } from './context/TaskContext'; 

function TaskForm() {
    // const { createTask } = props
    const INITIAL = {
        id: "",
        title: "",
        finish: false
    }
    const [dataForm, setDataForm] = useState(INITIAL)   
     //const { createTask }  = useContext(TaskContext);
     const { createTask } = useContext(TaskContext) as TodoContextType;
    //console.log(value)
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = e.target;
        setDataForm(prevDataForm => {
            return {
                ...prevDataForm,
                id: nanoid(),
                [name]: value,
            }

        })
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        createTask(dataForm);
        setDataForm({
            id: "",
            title: "",
            finish: false
        })
    }
  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={ handleSubmit } className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold text-white mb-3'>Add your task</h1>
        <input className="bg-slate-300 p-3 w-full mb-2" type="text" name="title" placeholder='Escribe tu tarea aqui' 
                onChange={  handleChange }
                value = { dataForm.title }
                autoFocus/>
        {/* <textarea className="bg-slate-300 p-3 w-full mb-2" name="description" 
                 placeholder='Escibe la descripción de la tarea'
                 onChange={ handleChange }
                 value = { dataForm.description }></textarea> */}
        <button className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400'>Add</button>
    </form>
    </div>
    
  )
}

export default TaskForm