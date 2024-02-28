import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { USER_PROFILE } from '../utils/queries'

const Profile  = () => {
    //need to modify this code, and then apply hooks to load data
    
// const { loading, data }  = useQuery(USER_PROFILE)
// const { loading: userLoading, data: userData } = useQuery(USER_PROFILE)

   return (
<div class="relative flex min-h-screen flex-col  overflow-hidden sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-1">
<div class="max-w-sm rounded overflow-hidden  "> 
  <div class="bg-white shadow-md rounded px-10 pt-12 pb-16 mb-8">
    <div class="font-bold text-xl mb-2">Welcome  </div>
    <p class="text-gray-700 text-base">
      "Sometimes the smallest step in the right direction ends up being the biggest step of your life. Tiptoe if you must, but take a step"
    </p>
  </div>
</div>

<div class='bg-slate-200/50 shadow-md rounded px-5 pt-5 pb-5 mb-8'>
    <div class="font-bold text-xl mb-2 ">
        Users Exercise Plan:
    </div> 
   
</div>
</div>
   )         
}
export default Profile