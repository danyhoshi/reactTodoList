import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskContextProvider } from './context/TaskContext';
import TaskForm from './TaskForm';
//const randomSpy = jest.spyOn(nanoid, 'nanoid');
//const mockEditIconTask = jest.fn;
//jest.mock("nanoid", () => {   return { nanoid: () => "123" } })
describe("TaskForm", ()=> {
  beforeEach(() => {
    render( 
      <TaskContextProvider>
          <TaskForm />
      </TaskContextProvider>
    )
  })
  test('Renders button Add', async () => {
    const buttonAdd = await screen.findByRole('button', {name: /Add/i});
    expect(buttonAdd).toBeInTheDocument();
   
  });

  test('Renders input Add', async () => {
    const inputAdd = screen.getByPlaceholderText(/Type your task here/i);
    expect(inputAdd).toBeInTheDocument();
  });
})
