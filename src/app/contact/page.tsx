import ContactForm from '../../components/ContactForm';
export default function Contact(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-teal-400 text-white p-12">
      <main className="mx-auto max-w-3xl bg-white/5 p-8 rounded">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-white/80">Send us a message and we'll reply.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </main>
    </div>
  )
}
