import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end();
  const { name, email, message } = req.body || {};
  // Basic server-side validation
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  if(typeof email !== 'string' || !email.includes('@')) return res.status(400).json({ error: 'Invalid email' });
  // TODO: Replace with real mailer integration. For now, write to a placeholder log.
  console.log('Contact form submitted:', { name, email, message });
  return res.status(200).json({ ok: true });
}
