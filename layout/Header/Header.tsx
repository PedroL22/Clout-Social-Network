import Link from 'next/link'

export const Header = () => {
  return (
    <header className='bg-primary flex h-16 items-center justify-center text-lg font-medium text-stone-50 transition-all hover:text-stone-100'>
      <nav className='flex w-full max-w-screen-xl justify-between'>
        <Link href='/'>CloUt</Link>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  )
}
