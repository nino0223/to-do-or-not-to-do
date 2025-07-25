'use client'
import { useState } from "react"
import { supabase } from "../lib/supabase"
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from "next/link"

const Signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

   const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
      router.push("/login")
    }

    setLoading(false)
  }

  return (
    <div className="font-sans inline-flex items-center justify-center min-h-screen min-w-screen bg-linear-to-t from-blue-600 to-fuchsia-500">
        <form onSubmit={handleSignup} className='flex flex-col items-center justify-center bg-stone-50 rounded-3xl shadow-lg px-6 py-8 w-1/4 h-max'>
            <h1 className='text-5xl font-bold pb-7'>SIGN UP</h1>
             {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <input type="text" placeholder='Username' onChange={(e) => setEmail(e.target.value)} className='bg-gray-300 rounded w-96 h-15 px-3 mt-4' required/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='bg-gray-300 rounded w-96 h-15 px-3 my-4' required/>
            <button className='bg-fuchsia-500 px-9 py-4 my-4 w-96 rounded-2xl text-white text-1xl font-bold' type="submit" disabled={loading}>{loading ? "Logging in..." : "SIGN UP"}</button>
            <Link href="/login" className="text-blue-400 hover:underline mt-4 text-right">
            Already have an account? Log in here
            </Link>
        </form>
    </div>
  )
}

export default Signup

