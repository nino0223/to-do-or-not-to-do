'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Statustracker from '../components/statustracker';

const Dashboard = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user && user.email) {
        // Extract username before '@'
        const name = user.email.split('@')[0]
        
        setUsername(capitalizeFirstLetter(name))
      }
    }
    getUser()
  }, [])

  function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

  return (
    <div className="font-sans inline-flex items-center justify-center min-h-screen min-w-screen bg-linear-to-t from-blue-600 to-fuchsia-500">
      <div className="text-white text-4xl font-bold">
        Welcome {username} to the Dashboard!
      </div>
      <Statustracker Title="All tickets" Status="All" />
      <Statustracker Title="Normal Status" Status="Normal" />
      <Statustracker Title="High Status" Status="High" />
      <Statustracker Title="Closed Tickets" Status="Closed" />
    </div>
  )
}

export default Dashboard