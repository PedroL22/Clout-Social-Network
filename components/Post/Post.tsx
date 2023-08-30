'use client'

import Image from 'next/image'

import { DotsThreeVertical, Heart, ChatCircle } from '@phosphor-icons/react'

import { PostEntity } from '@entities'

interface PostProps extends Partial<PostEntity> {
  username: string
  text: string
  postDate: string
}

export const Post = ({ username, text, postDate }: PostProps) => {
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

          <div className='flex cursor-pointer self-center rounded-full p-1 text-stone-500 hover:bg-stone-200'>
            <DotsThreeVertical weight='bold' />
          </div>
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
            className='cursor-pointer text-stone-500 hover:text-red-700'
          />
          <div className='h-full w-[1px] bg-stone-300' />
          <ChatCircle
            size={28}
            weight='light'
            className='cursor-pointer text-stone-500 hover:text-blue-700'
          />
        </div>
      </div>
    </article>
  )
}
