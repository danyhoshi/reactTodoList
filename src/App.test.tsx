import { render, screen, fireEvent } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { TaskContextProvider, Task } from './context/TaskContext';
import App from "./App"
// const mockGetItem = jest.fn();
// const mockSetItem = jest.fn();
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
        title: "My third task new", 
        finish: false,
        edit: false
    }
]

describe("App", ()=> {

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
        <App />
      </TaskContextProvider>
      )
    })

    test('should save 3 task in localstorage', async () => {
      window.localStorage.clear();
      addTask(tasks);
      //  let exist = localStorage.getItem('tasks') ? true : false
      //  console.log(localStorage.getItem('tasks'))
      //  JSON.parse(localStorage.getItem('tasks') || '[]')
      // expect(exist).toBe(true);
      expect(JSON.parse(localStorage.getItem('tasks') || '[]').length).toBe(3);
     });

     test('should delete 3 tasks from localstorage', async () => {
        deleteTasks()
          console.log(localStorage.getItem('tasks'))
        //  console.log(prettyDOM(divElements[1]))
          expect(localStorage.getItem('tasks')).toBe("[]");
     });
    });