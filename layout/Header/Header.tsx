import { DesktopNav } from './components/DesktopNav'
import { MobileNav } from './components/MobileNav'

export const Header = () => {
  return (
    <header className='fixed flex h-16 w-full select-none items-center justify-center border-b-4 border-b-primaryDark bg-primary px-8 text-lg font-medium text-stone-50 transition-all duration-300 ease-in-out hover:text-stone-200'>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}
