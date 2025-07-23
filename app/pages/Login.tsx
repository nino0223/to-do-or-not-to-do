import React from 'react'

const Login = () => {
  return (
    <div className="font-sans inline-flex items-center justify-center min-h-screen min-w-screen bg-linear-to-t from-blue-600 to-fuchsia-500">
        <div className='flex flex-col items-center justify-center bg-stone-50 rounded-3xl shadow-lg px-6 py-8 w-1/4 h-max'>
            <h1 className='text-5xl font-bold pb-7'>LOGIN</h1>
            <input type="text" placeholder='Username' className='bg-gray-300 rounded w-96 h-15 px-3 mt-4'/>
            <input type="password" placeholder='Password'  className='bg-gray-300 rounded w-96 h-15 px-3 my-4'/>
            <button className='bg-fuchsia-500 px-9 py-4 my-4 w-96 rounded-2xl text-white text-1xl font-bold'>LOGIN</button>
        </div>
    </div>
  )
}

export default Login