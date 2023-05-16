import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
    setEmail('')
    setName('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userName'>Name</label>
        <input
          id='userName'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
