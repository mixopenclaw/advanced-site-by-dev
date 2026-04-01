import React, {useState} from 'react';

export default function ContactForm(){
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.target as HTMLFormElement);
    const res = await fetch('/api/contact', {method:'POST', body: form});
    if(res.ok) setStatus('success'); else setStatus('error');
  }
  return (
    <form onSubmit={handleSubmit} aria-label="Contact form">
      <label>Full name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Message<textarea name="message" required /></label>
      <button type="submit" disabled={status==='sending'}>{status==='sending'? 'Sending...':'Send'}</button>
      {status==='success' && <div role="status">Thanks — we'll be in touch.</div>}
      {status==='error' && <div role="alert">Error sending message.</div>}
    </form>
  )
}
