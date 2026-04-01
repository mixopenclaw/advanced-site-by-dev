import React from 'react'
import Link from 'next/link'
export default function Layout({children}:{children:React.ReactNode}){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Advanced Site</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/demo">Demo</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-1">{children}</main>
      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-sm text-gray-600">© {new Date().getFullYear()} Advanced Site</div>
      </footer>
    </div>
  )
}
