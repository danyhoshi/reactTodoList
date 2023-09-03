import React from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { TaskContext, Task, TodoContextType } from './context/TaskContext';
import { useContext } from 'react';

interface Props { //aqui defino todos los tipos de las Props que necesito recibir
   task:Task
}

const TaskCard: React.FC<Props> = ( {task} ) => {
   const { deleteTask } = useContext(TaskContext) as TodoContextType;

    return (
  
        <div className='bg-gray-800 text-white p-4 rounded-md max-w-md mx-auto grid grid-cols-6'>
         {/* <input type="checkbox" className="checked:bg-blue-500 ... col-start-1 col-end-1" /> */}
         <div className='col-span-5'>
            <input  type="checkbox" value="" className="text-blue-600 bg-gray-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <input type="text" className='min-h-full mx-1 w-11/12 rounded-md px-1 text-ml bg-gray-800 font-bold capitalize' value={ task.title }/> 
         </div>
         
          <FcEmptyTrash className='col-start-6 col-end-6 align-middle ml-auto' size={30}
                        onClick={() => deleteTask(task.id)}/>
        </div>
    
   )
  
}

export default TaskCard