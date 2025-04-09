// AddUserForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/users', user);
    alert('User added!');
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 border w-1/3 mx-auto mt-10 text-black">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4">Add User</button>
    </form>
  );
};

export default AddUserForm;
