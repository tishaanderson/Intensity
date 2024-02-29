import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import '../styles/Login.css';
import Auth from '../utils/auth';

const LogIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [LoginUser, { error }] = useMutation(LOGIN_USER); // Destructure the 'error' from the useMutation hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await LoginUser({
        variables: formData
      });

      Auth.login(data.login.token);
      window.location.replace('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='h-screen loginCard'>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit} class=" bg-white shadow-md rounded px-16 pt-12 pb-16 mb-8">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input value={formData.username} onChange={(event) => setFormData({ ...formData, username: event.target.value })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            {error && <div className="text-red-500 text-xs italic">Incorrect username or password. Please try again.</div>} {/* Display error message if there's an error */}
          </div>
          <div class="flex items-center justify-between ">
            <button class="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;