import React from 'react'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  'aria-label'?: string
}

export default function Button({children,onClick,variant='primary',size='md',className='',...rest}:Props){
  const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
  const variants:any = {
    primary: 'bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-sm hover:opacity-95',
    ghost: 'bg-transparent text-indigo-600 hover:bg-indigo-50'
  }
  const sizes:any = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className} focus-ring`} {...rest}>
      {children}
    </button>
  )
}
