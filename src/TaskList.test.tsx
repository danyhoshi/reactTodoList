import { render, screen, fireEvent } from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom'
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { TaskContextProvider, Task } from './context/TaskContext';
import TaskForm from './TaskForm'; 
import TaskList from './TaskList';
import ButtonClear from './ButtonClear';
let tasks : Array<Task> 
tasks = [
    {
        id: '0', 
        title: "My first task", 
        finish: false,
        edit: false
    }, 
    {
        id: '1', 
        title: "My second task", 
        finish: false,
        edit: false
    }, 
    {
        id: '2', 
        title: "My third task", 
        finish: false,
        edit: false
    }
]

describe("TaskList, TaskForm and ButtonClear", ()=> {

    const addTask = (tasks: Array<Task>) => {
        const inputAdd = screen.getByPlaceholderText(/Type your task here/i);
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        tasks.forEach(element => {
            fireEvent.change(inputAdd, { target: { value: element.title } });
            fireEvent.click(buttonElement);
        });
    }

    const deleteTasks = () => {
        const checks = screen.getAllByRole("checkbox");
        const buttonDelete = screen.getByRole("button", { name: /Clear all completed/i});
        checks.forEach(element => { fireEvent.click(element); });
        fireEvent.click(buttonDelete);
    }

    beforeEach(() => {
      render( 
        <TaskContextProvider>
              <div className='container mx-auto p-10'> {/*coloca en auto o centro el margen del eje x*/}
          <TaskForm />
            <div>
              <TaskList />
              <ButtonClear />
            </div>
        </div>
        </TaskContextProvider>
      )
    })

    test('should render the amount things (3)', async () => {
        addTask(tasks);
        const inputs = screen.getAllByRole("textbox", {name: "task"});
       // const divElements = screen.getAllByTestId("task-container");
        //console.log(prettyDOM(divElements[1]))
        expect(inputs.length).toBe(3);
     });

     test('should render a changed task', async () => {
        addTask([{id: "3", title: "New task", finish: false, edit: false}]);
        let inputTask = screen.getByDisplayValue("New task");
        fireEvent.change(inputTask, {
                target: {
                value: "Good day",
             },
           });
           console.log(prettyDOM(inputTask))
        expect(screen.getByDisplayValue("Good day")).toBeInTheDocument();
     });

     test('should delete a task', async () => {
        //addTask([{id: "3", title: "New task", finish: false, edit: false}]);
        let inputTask = screen.getByDisplayValue("Good day");
       // console.log(prettyDOM(divElements[1]))
        fireEvent.change(inputTask, {
                target: {
               value: "Good Good day",
             },
           });
          // console.log(prettyDOM(inputTask))
          const trashIcon = screen.getByTestId('trashIcon');
          fireEvent.click(trashIcon)
          const divElements = screen.getAllByRole("textbox", {name: "task"});
        //  console.log(prettyDOM(divElements[1]))
          expect(divElements.length).toBe(3);
     });

     test('should delete 3 tasks', async () => {
        deleteTasks()
        const divElements = screen.queryAllByRole("textbox", {name: "task"});
        expect(divElements.length).toBe(0);
     });

     test('task without title is not add', async () => {
      addTask([{id: "4", title: "", finish: false, edit: false}])
        const divElements = screen.queryAllByRole("textbox", {name: "task"});
        expect(divElements.length).toBe(0);
   });
})