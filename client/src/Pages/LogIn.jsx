import React, { useState }  from 'react'
import PageHeader from '../components/PageHeader'
import { LOGIN_USER } from '../utils/mutations'
import {useMutation} from '@apollo/client'
import '../styles/Login.css'

const LogIn = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      
    })
  const [LoginUser] =  useMutation(LOGIN_USER)
  const handleSubmit = async (event) => {
    event.preventDefault()
    alert("test")
    console.log(formData)
  const {data} = await LoginUser({
    variables: formData
  })

  window.location.replace('/')
}
  return (
    <div className='h-screen loginCard'>
      {/* <PageHeader /> */}

      
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <form onSubmit = {handleSubmit} class=" bg-white shadow-md rounded px-16 pt-12 pb-16 mb-8">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input value={formData.username} onChange={(event)=>setFormData({...formData, username:event.target.value})}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input value={formData.password} onChange={(event)=>setFormData({...formData, password:event.target.value})}  class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            
          </div>
          <div class="flex items-center justify-between ">
            <button class="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-emerald-500 hover:text-emerald-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  )
}
  

export default LogIn