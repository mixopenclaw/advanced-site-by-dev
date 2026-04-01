'use client'
import React, {useState} from 'react'

export default function DemoWidget(){
  const [count,setCount]=useState(0)
  const [msg,setMsg]=useState('')
  async function callApi(){
    try{
      const r=await fetch('/api/hello')
      const j=await r.json()
      setMsg(j.message||JSON.stringify(j))
    }catch(e){setMsg(String(e))}
  }
  return (
    <div style={{border:'1px solid #e5e7eb',padding:16,borderRadius:8}}>
      <div>Count: {count}</div>
      <div style={{marginTop:8}}>
        <button onClick={()=>setCount(c=>c+1)} style={{marginRight:8}}>+1</button>
        <button onClick={()=>setCount(c=>c-1)}>-1</button>
      </div>
      <div style={{marginTop:12}}>
        <button onClick={callApi}>Call /api/hello</button>
      </div>
      {msg && <pre style={{marginTop:8}}>{msg}</pre>}
    </div>
  )
}
