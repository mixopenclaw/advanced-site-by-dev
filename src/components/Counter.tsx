'use client'
import React, {useState} from 'react'
export default function Counter(){
  const [n,setN]=useState(0)
  return (
    <div className="space-x-2"> 
      <button onClick={()=>setN(n-1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
      <span className="font-medium">{n}</span>
      <button onClick={()=>setN(n+1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
    </div>
  )
}
