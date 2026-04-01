'use client'
import React, {useState} from 'react'
import Button from './Button'

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
    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-slate-500 dark:text-slate-300">Demo</div>
        <div className="text-xs text-slate-400">Preview</div>
      </div>
      <div className="border rounded-md p-3 bg-slate-50 dark:bg-slate-900">
        <div className="text-lg font-medium mb-2">Count: <span className="text-indigo-600">{count}</span></div>
        <div className="flex gap-2">
          <Button size="sm" onClick={()=>setCount(c=>c+1)}>+1</Button>
          <Button size="sm" onClick={()=>setCount(c=>c-1)}>-1</Button>
          <Button variant="ghost" size="sm" onClick={callApi}>Call API</Button>
        </div>
        {msg && <pre className="mt-3 text-xs text-slate-500 dark:text-slate-300">{msg}</pre>}
      </div>
    </div>
  )
}
