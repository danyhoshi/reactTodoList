import { TaskContext, TodoContextType } from './context/TaskContext';
import { useContext } from 'react';


function ButtonClear() {
  const { deleteTasksCompleted } = useContext(TaskContext) as TodoContextType;
  return (
    <div className="max-w-md mx-auto">
         <button onClick={ deleteTasksCompleted }
                className='bg-red-500 px-3 py-2 my-2  text-white hover:bg-red-400'>Clear all completed</button>
    </div>  
  )
}

export default ButtonClear