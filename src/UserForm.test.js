import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test('it shows two inputs and a button', () => {

  // 1. Render the component 
  render(<UserForm />)
  
  // 2. Manipulate the component
  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')
  
  // 3. Assertion - make sure the component is doing. What we expect it to do
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('get the name and email values', async () => {
  // NOT THE BEST IMPLEMENTATION
  // const argList = [];
  // const callback = (...arg) => {
  //   argList.push(arg)
  // }

  const mock = jest.fn();
  
  // render the component
  render( <UserForm onUserAdd={mock} />)

  // finding the 2 inputs and the one button
  const inputName = screen.getByRole('textbox', { name: /name/i })
  const inputEmail = screen.getByRole('textbox', { name: /email/i })
  const button = screen.getByRole('button')
  
  // othe way to find element by label text
  // const inputName = screen.getByLabelText(/name/i)
  // const inputEmail = screen.getByLabelText(/email/i)

  // simulate typing in a name
  await user.click(inputName)
  await user.keyboard('jane')

  // simulate typing in a email
  await user.click(inputEmail)
  await user.keyboard('jane@jane.com')

  // simulate click button
  await user.click(button)

  // Assetion to make sure onUserAdd function gets called with name/email 
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' })
})

test('empties the two inputs when form submitted', () => {
  render(<UserForm onUserAdd={() => {}} />)

  const inputName = screen.getByRole('textbox', { name: /name/i });
  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button')


  user.click(inputName)
  user.keyboard('Carlos')
  user.click(inputEmail)
  user.keyboard('carlos@carlos.com')

  user.click(button)

  expect(inputName).toHaveValue('')
  expect(inputEmail).toHaveValue('')
})
