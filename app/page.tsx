import React from 'react'
import DemoWidget from '../src/components/DemoWidget'
import Button from '../src/components/Button'

export default function Page(){
  return (
    <main className="container hero">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-teal-600 font-semibold">New · Prototype-ready</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">Pulse — Turn ideas into tiny apps</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">Build, share, and iterate on small productive apps in minutes. Ship prototypes, demos, and playgrounds with a tiny developer-focused UI.</p>
          <div className="mt-6 flex gap-4">
            <Button>Get started</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-2xl overflow-hidden transform hover:scale-[1.01] transition-shadow shadow-card">
              <DemoWidget />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
