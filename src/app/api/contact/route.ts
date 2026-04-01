import { NextResponse } from 'next/server';

function validEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !message || !email || !validEmail(email)) {
      return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
    }
    // Log server-side
    // eslint-disable-next-line no-console
    console.log('[contact]', { name, email, message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }
}
