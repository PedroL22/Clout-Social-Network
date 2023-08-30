'use client'

import Link from 'next/link'

import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex w-full max-w-screen-xl items-center justify-between sm:hidden'>
      <Link href='/'>CloUt</Link>

      {!isOpen ? (
        <List
          size={32}
          className='cursor-pointer'
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <X
          size={32}
          className='cursor-pointer'
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        data-state={isOpen}
        className='absolute right-0 top-16 z-50 flex h-screen w-0 flex-col space-y-9 bg-primaryDark bg-opacity-50 pt-16 text-5xl font-medium backdrop-blur-sm transition-all duration-300 ease-in-out data-[state=true]:w-screen'
      >
        <Link
          href='/'
          data-state={isOpen}
          className='text-center opacity-0 transition-all duration-150 ease-in-out data-[state=true]:opacity-100'
          onClick={() => setIsOpen(false)}
        >
          CloUt
        </Link>
        <Link
          href='/'
          data-state={isOpen}
          className='text-center opacity-0 transition-all duration-150 ease-in-out data-[state=true]:opacity-100'
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </nav>
    </nav>
  )
}
