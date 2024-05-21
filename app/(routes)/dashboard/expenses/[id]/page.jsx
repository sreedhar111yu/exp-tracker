'use client'
import React, { useEffect } from 'react'

function Expenses({params}) {
    useEffect(()=>{
        console.log(params)
    },[params])
    
  return (
    <div>
        Expenses
      
    </div>
  )
}

export default Expenses
