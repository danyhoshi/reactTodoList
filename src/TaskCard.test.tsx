import { render, screen, fireEvent, waitFor } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { TaskContextProvider, Task } from './context/TaskContext';

import TaskCard from './TaskCard';
//const randomSpy = jest.spyOn(nanoid, 'nanoid');
//const mockEditIconTask = jest.fn;
//jest.mock("nanoid", () => {   return { nanoid: () => "123" } })
let task: Task;
task = {
    id: '1',
    title: 'Test',
    finish: false,
    edit: false
}
describe("TaskForm", ()=> {
  beforeEach(() => {
    render( 
      <TaskContextProvider>
          <TaskCard task = {task} />
      </TaskContextProvider>
    )
  })
  test('Renders checkbox task', async () => {
    const inputCheck = await screen.findByRole('checkbox');
    expect(inputCheck).toBeInTheDocument();
   
  });

  test('Renders input task', async () => {
    const inputTask = await screen.findByRole('textbox');
    expect(inputTask).toBeInTheDocument();
  });


  test('Renders edit Icon', async () => {
    const editIcon = screen.getByTestId('editIcon');
    expect(editIcon).toBeInTheDocument();
  });
  
  test('Renders text with line through', async () => {
    const inputTask = await screen.findByRole('textbox');
    const inputCheck = await screen.findByRole('checkbox');
    fireEvent.click(inputCheck);
    expect(inputTask).toHaveClass("line-through");
    //expect(editIcon).toBeInTheDocument();
  });
  

//   test('Delete task on click trash icon', async () => {

//   //  userEvent.type(screen.getByRole('textbox'), "Test Example");
//      let inputTask = screen.getByDisplayValue('Test');
// //    // screen.getByDisplayValue('Changed task'))
// //    //console.log("Este es el test: " + inputTask)
//    fireEvent.change(inputTask, {
//     target: {
//       value: "Good day",
//     },
//   });
//   await waitFor(() => {
//     expect(screen.getByRole('textbox')).toHaveValue("Good day");
//   }) 
//    // const inputTaskChanged = screen.getByDisplayValue('Changed task');
//   //  console.log(inputTask)
//  // expect(inputTask).toHaveValue("Test Example");
//    // expect(inputTask).toBeInTheDocument();
   
//   });
}) 
