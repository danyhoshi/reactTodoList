import { useContext } from 'react' 
import TaskCard from "./TaskCard"
import { TaskContext, TodoContextType} from './context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext) as TodoContextType;
  
  return (
        <div className='grid grid-cols-1 gap-2'>
            {tasks.map(t => {
                return (<div key = {t.id} id= { t.id } >
                    <TaskCard task={ t }/>
              </div>)
            })}
        </div> 
  )
}

export default TaskList