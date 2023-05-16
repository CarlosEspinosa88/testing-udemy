import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

function renderComponent() {
  const users = [
    { name: 'Carlos', email: 'carlos@carlos.com' },
    { name: 'Bibiana', email: 'bibiana@bibiana.com' },
  ];

  render(<UserList users={users} />);
  
  return { users }
}

test('get all rows from the list', () => {
  // render the component
  renderComponent()
  
  // fallback 1
  // find the all row of users =====> screen.logTestingPlaygroundURL()
  // row = fila
  const rows = within(screen.getByTestId('users')).getAllByRole('row')
  
  // Assetion correct number of rows in the table
  expect(rows).toHaveLength(2)

  // fallback 2
  // find all rows of users on the table with "container"
  // const { container } = render(<UserList users={users} />)
  // // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr')
  // expect(rows).toHaveLength(2)
})

test('render the email and name of each user', () => {
  const { users } = renderComponent()
  // cell = columna

  for( const user of users) {
    const name = screen.getByRole('cell', { name: user.name })
    const email = screen.getByRole('cell', { name: user.email })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
})