import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Trash } from '@phosphor-icons/react'

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        side='bottom'
        className='data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[120px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]'
        sideOffset={5}
      >
        <DropdownMenu.Item className='group relative flex h-[25px] cursor-pointer select-none items-center gap-1 rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-stone-700 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-primary data-[highlighted]:text-stone-50'>
          <Trash /> Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}

export default DropdownMenuDemo
