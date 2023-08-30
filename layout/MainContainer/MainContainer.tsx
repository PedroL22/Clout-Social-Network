import { ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main className='flex min-h-screen justify-center bg-stone-200 pt-16'>
      <div className='flex w-full max-w-screen-xl flex-col'>{children}</div>
    </main>
  )
}
