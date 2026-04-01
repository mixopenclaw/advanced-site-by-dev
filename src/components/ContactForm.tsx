import { useState } from 'react';

export default function ContactForm(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [status,setStatus]=useState<string | null>(null);
  const submit = async (e:any)=>{
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name,email,message})});
    const json = await res.json();
    if(json.ok){ setStatus('sent'); setName(''); setEmail(''); setMessage(''); }
    else setStatus('error');
  }
  return (
    <form onSubmit={submit} aria-label="Contact form" className="space-y-3">
      <div>
        <label className="block text-sm">Name</label>
        <input required value={name} onChange={e=>setName(e.target.value)} className="w-full rounded px-3 py-2"/>
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded px-3 py-2"/>
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea required value={message} onChange={e=>setMessage(e.target.value)} className="w-full rounded px-3 py-2"/>
      </div>
      <div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </div>
      {status==='sent' && <div role="status">Thanks — we'll be in touch.</div>}
      {status==='error' && <div role="alert">Submission failed.</div>}
    </form>
  )
}
