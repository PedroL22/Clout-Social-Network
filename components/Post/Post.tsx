'use client'

import Image from 'next/image'
import { useState } from 'react'

import { ChatCircle, DotsThreeVertical, Heart } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { PostEntity } from '@entities'
import DropdownMenuDemo from './components/Dropdown/Dropdown'

interface PostProps extends Partial<PostEntity> {
  username: string
  text: string
  postDate: string
}

export const Post = ({ username, text, postDate }: PostProps) => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <article className='w-80 rounded-xl bg-stone-100 p-8 shadow-md sm:w-[36rem]'>
      <div className='flex space-x-3'>
        <Image
          src='https://avatars.githubusercontent.com/u/40894497?v=4'
          alt={`${username} profile picture`}
          width={50}
          height={50}
          className='cursor-pointer rounded-md'
        />

        <div className='flex w-full justify-between'>
          <div className='flex flex-col justify-center'>
            <p className='cursor-pointer text-lg text-stone-500 hover:underline'>@{username}</p>
            <p className='text-xs sm:text-sm'>{postDate}</p>
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div
                role='button'
                aria-label='More options'
                tabIndex={0}
                className='flex cursor-pointer self-center rounded-full p-1 text-stone-500 hover:bg-stone-200'
              >
                <DotsThreeVertical
                  weight='bold'
                  aria-hidden
                />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenuDemo />
          </DropdownMenu.Root>
        </div>
      </div>

      <div className='mt-5'>
        <p>{text}</p>
      </div>

      <div className='mt-8 flex justify-center'>
        <div className='flex w-full justify-around'>
          <Heart
            size={28}
            weight='light'
            role='button'
            aria-label='Like'
            tabIndex={0}
            className='cursor-pointer text-stone-500 hover:text-red-700'
          />
          <div className='h-full w-[1px] bg-stone-300' />
          <ChatCircle
            size={28}
            weight='light'
            role='button'
            aria-label='Comment'
            tabIndex={0}
            className='cursor-pointer text-stone-500 hover:text-blue-700'
          />
        </div>
      </div>
    </article>
  )
}
