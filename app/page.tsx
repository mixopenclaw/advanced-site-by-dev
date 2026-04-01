import React from 'react'
import DemoWidget from '../src/components/DemoWidget'
import Button from '../src/components/Button'

export default function Page(){
  return (
    <main style={{fontFamily:'Inter,system-ui,Arial',maxWidth:960,margin:'40px auto',padding:'0 20px'}}>
      <section style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:20}}>
        <div>
          <h1 style={{fontSize:48,margin:0}}>Pulse — Turn ideas into tiny apps</h1>
          <p style={{color:'#6b7280',fontSize:18}}>Build, share, and iterate on small productive apps in minutes.</p>
          <div style={{marginTop:16}}>
            <Button>Get started</Button>
          </div>
        </div>
        <div style={{width:360}}>
          <DemoWidget />
        </div>
      </section>
    </main>
  )
}
