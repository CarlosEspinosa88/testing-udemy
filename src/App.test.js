import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('renders if the user name and email are in the document', async () => {
  const nameUser = 'Carlos'
  const emailUser = 'carlos@carlos.com'

  render(<App />);
  
  const inputName = screen.getByRole('textbox', { name: /name/i })
  const inputEmail = screen.getByRole('textbox', { name: /email/i })
  const button = screen.getByRole('button')

  // click and write in name input
  await user.click(inputName)
  await user.keyboard(nameUser)
  
  // click and write in email input
  await user.click(inputEmail)
  await user.keyboard(emailUser)
  
  // click on button
  await user.click(button)

  // debug() render all app to see the html
  // screen.debug() 

  // get the value name and email
  const name = screen.getByRole('cell', { name: nameUser })
  const email = screen.getByRole('cell', { name: emailUser })


  // Assetion
  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
});
