import { PostEntity } from './PostEntity'

export interface UserEntity {
  userId: string
  username: string
  profilePic: string
  isAdmin: boolean
  posts: PostEntity[]
}
