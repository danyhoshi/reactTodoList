import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import ButtonClear from './ButtonClear'

function App() {
 
  return (
    
      <main className='bg-zinc-900 min-h-full'>
        <div className='container mx-auto p-10'> {/*coloca en auto o centro el margen del eje x*/}
          <TaskForm />
          <TaskList />
          <ButtonClear />
        </div>
      </main>
   
  )
}

export default App
