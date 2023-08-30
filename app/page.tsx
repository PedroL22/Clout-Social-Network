import { Post } from '@components/Post'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Post
        username='PedroLucena'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit doloremque repudiandae nesciunt voluptas molestiae suscipit.'
        postDate='22 de setembro de 2022'
      />
    </div>
  )
}
