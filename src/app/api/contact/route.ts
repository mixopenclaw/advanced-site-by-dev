import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const data = await req.formData().catch(()=>null) || await req.json().catch(()=>null);
  const name = data?.get?.('name') || data?.name;
  const email = data?.get?.('email') || data?.email;
  const message = data?.get?.('message') || data?.message;
  if(!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  if(typeof email !== 'string' || !email.includes('@')) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  console.log('Contact (app router) received', { name, email, message });
  return NextResponse.json({ ok: true });
}
