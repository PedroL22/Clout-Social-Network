import Link from 'next/link'

export const DesktopNav = () => {
  return (
    <nav className='hidden w-full max-w-screen-xl justify-between sm:flex'>
      <Link href='/'>CloUt</Link>
      <Link href='/'>Home</Link>
    </nav>
  )
}
