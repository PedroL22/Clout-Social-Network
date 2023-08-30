import { DesktopNav } from './components/DesktopNav'
import { MobileNav } from './components/MobileNav'

export const Header = () => {
  return (
    <header className='flex h-16 select-none items-center justify-center border-b-4 border-b-primaryDark bg-primary px-8 text-lg font-medium text-stone-50 transition-all hover:text-stone-100'>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}
