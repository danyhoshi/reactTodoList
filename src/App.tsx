import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import ButtonClear from './ButtonClear'
import { TaskContext, TodoContextType } from './context/TaskContext';
import { useContext } from 'react';

function App() {
  const { editIconTask, tasks } = useContext(TaskContext) as TodoContextType;
  return (
      <main className='bg-zinc-900 min-h-full'
      onClick={ editIconTask }>
        <div className='container mx-auto p-10'> {/*coloca en auto o centro el margen del eje x*/}
          <TaskForm />
          { tasks.length > 0 &&
            <div>
              <TaskList />
              <ButtonClear />
            </div>
          }
        </div>
      </main>
   
  )
}

export default App
