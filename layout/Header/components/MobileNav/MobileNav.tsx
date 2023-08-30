'use client'

import Link from 'next/link'

import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex w-full max-w-screen-xl items-center justify-between sm:hidden'>
      <Link href='/'>CloUt</Link>

      <List
        data-state={isOpen}
        className='hidden h-0 w-0 cursor-pointer transition-all duration-150 ease-in-out data-[state=false]:flex data-[state=false]:h-8 data-[state=false]:w-8'
        onClick={() => setIsOpen(true)}
      />

      <X
        data-state={isOpen}
        className='hidden h-0 w-0 cursor-pointer transition-all duration-150 ease-in-out data-[state=true]:flex data-[state=true]:h-8 data-[state=true]:w-8'
        onClick={() => setIsOpen(false)}
      />

      <nav
        data-state={isOpen}
        className='absolute right-0 top-16 z-50 flex h-screen w-0 flex-col space-y-9 overflow-hidden bg-primaryDark bg-opacity-50 pt-16 text-5xl font-medium backdrop-blur-sm transition-all duration-300 ease-in-out data-[state=true]:w-screen'
      >
        <Link
          href='/'
          data-state={isOpen}
          className='text-center opacity-0 transition-all duration-300 ease-in-out data-[state=true]:opacity-100'
          onClick={() => setIsOpen(false)}
        >
          CloUt
        </Link>
        <Link
          href='/'
          data-state={isOpen}
          className='text-center opacity-0 transition-all duration-300 ease-in-out data-[state=true]:opacity-100'
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </nav>
    </nav>
  )
}
