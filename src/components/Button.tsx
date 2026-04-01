import React from 'react'

export default function Button({children, onClick}:{children:React.ReactNode,onClick?:()=>void}){
  return (
    <button onClick={onClick} style={{padding:'10px 16px',borderRadius:6,background:'#0ea5a4',color:'white',border:'none',cursor:'pointer'}}>
      {children}
    </button>
  )
}
