import { NextResponse } from 'next/server'

const MAILER_PROVIDER = process.env.MAILER_PROVIDER || process.env.NEXT_PUBLIC_MAILER_PROVIDER;
const MAILER_API_KEY = process.env.MAILER_API_KEY || process.env.NEXT_PUBLIC_MAILER_API_KEY;

export async function POST(req: Request){
  const data = await req.formData().catch(()=>null) || await req.json().catch(()=>null);
  const name = data?.get?.('name') || data?.name;
  const email = data?.get?.('email') || data?.email;
  const message = data?.get?.('message') || data?.message;
  if(!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  if(typeof email !== 'string' || !email.includes('@')) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });

  console.log('Contact (app router) received', { name, email, message });

  // If a mailer provider/key is configured, attempt a mock send (do not require real secrets in repo)
  if(MAILER_PROVIDER && MAILER_API_KEY){
    try{
      // In future replace with real provider call. For now, simulate a send and log the payload.
      console.log(`Mock send via ${MAILER_PROVIDER}`, { to: email, subject: `New contact from ${name}`, body: message });
      // simulate async delay
      await new Promise((r)=>setTimeout(r, 200));
      return NextResponse.json({ ok: true, sent: true });
    }catch(err){
      console.error('Mock mailer failed', err);
      return NextResponse.json({ ok: false, error: 'Mailer failed' }, { status: 502 });
    }
  }

  // No mailer configured — accept and log for now
  console.log('No mailer configured; accepting submission (no-op send)');
  return NextResponse.json({ ok: true, sent: false });
}
