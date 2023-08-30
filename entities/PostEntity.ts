import { UserEntity } from './UserEntity'

export interface PostEntity {
  postId: string
  text: string
  authorId: string
  createdAt: string
  author: UserEntity
}
