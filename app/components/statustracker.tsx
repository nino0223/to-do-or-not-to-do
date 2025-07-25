import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface StatustrackerProps {
  Title: string;
  Status: string;
}

const Statustracker = ({ Title, Status }: StatustrackerProps) => {
  const [count, setCount] = useState<number | null>(null)
  useEffect(() => {
    const fetchCount = async () => {
      // Replace 'tickets' with your actual table name and 'status' with your column name
      const { count, error } = await supabase
        .from('ticket')
        .select('*', { count: 'exact' })
        .eq('status', Status)

      if (!error) {
        setCount(count ?? 0)
      }
    }
    fetchCount()
  }, [Status])

  return (
    <div className='rounded-2xl'>
      <div className='bg-gray-800 p-4 rounded-lg flex items-center justify-between'>
        <div>
          <h2 className='text-xl font-semibold text-white'>{Title}</h2>
          <h1 className='text-3xl text-white'>{count !== null ? count : '0'}</h1>
        </div>
        <svg height="70" width="70">
          <circle r="20" cx="35" cy="35"  />
        </svg>
      </div>
    </div>
  )
}

export default Statustracker