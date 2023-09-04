import React from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { TaskContext, Task, TodoContextType } from './context/TaskContext';
import { useContext } from 'react';

interface Props { //aqui defino todos los tipos de las Props que necesito recibir
   task:Task
}

const TaskCard: React.FC<Props> = ( {task} ) => {
   const { deleteTask, toggleFinish, updateTask } = useContext(TaskContext) as TodoContextType;
   const INITIAL = {
      title: task.title,
      finish: task.finish, 
  }
  const [dataForm, setDataForm] = React.useState(INITIAL)   

   function handleChange(event: React.ChangeEvent<HTMLInputElement>, taskId: string) {
      const { checked, type, name, value } = event.target;
      setDataForm(prevDataForm => {
         return {
            ...prevDataForm,
            [name]: type === "checkbox" ? checked : value
         }})
         if(type === "checkbox"){
            toggleFinish(taskId, checked);
         }
         else {

            updateTask(value, taskId)
         }
   }       

    let input: JSX.Element
    let icon: JSX.Element
    return (
  
        <div className='bg-gray-800 text-white p-4 rounded-md max-w-md mx-auto grid grid-cols-6'>
         <div className='col-span-5'>
               <input type="checkbox" 
               checked = { dataForm.finish }
                name="finish" 
                onChange={ (e) => handleChange(e, task.id) } 
                className="text-blue-600 bg-gray-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                { input = dataForm.finish ? 
                <input type="text" 
                        name="title"  
                        value={ task.title}
                        className='outline-none min-h-full mx-1 w-11/12 rounded-md px-1 text-ml bg-gray-800 font-bold capitalize line-through'/> :
               <input type="text" 
                        name="title"
                        onChange={ (e) => handleChange(e, task.id) }
                        value={ task.title } 
                        className='outline-none min-h-full mx-1 w-11/12 rounded-md px-1 text-ml bg-gray-800 font-bold capitalize' /> }
         </div>
         {
            icon = task.edit ? 
            <FcEmptyTrash className='col-start-6 col-end-6 align-middle ml-auto' size={30}
            onClick={() => deleteTask(task.id)}/> :
            <CgMoreVerticalAlt className='col-start-6 col-end-6 align-middle ml-auto' size={30} />
         }
        </div>
    
   )
  
}

export default TaskCard