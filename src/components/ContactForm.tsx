import React, {useState} from 'react';
import toast from 'react-hot-toast';
import Toaster from './Toaster';

export default function ContactForm(){
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.target as HTMLFormElement);
    try{
      const res = await fetch('/api/contact', {method:'POST', body: form});
      if(res.ok){
        setStatus('success');
        toast.success('Message sent — thanks!');
      }else{
        setStatus('error');
        const json = await res.json().catch(()=>null);
        toast.error(json?.error || 'Error sending message');
      }
    }catch(err){
      setStatus('error');
      toast.error('Network error');
    }
  }
  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <label>Full name<input name="name" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Message<textarea name="message" required /></label>
        <button type="submit" disabled={status==='sending'}>{status==='sending'? 'Sending...':'Send'}</button>
      </form>
    </>
  )
}
