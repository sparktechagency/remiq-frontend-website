export interface IPost {
  id: string
  user: {
    username: string
    avatar: string
    isFollowing: boolean
  }
  content: {
    title: string
    description: string
    hashtags: string[]
    video?: string // Changed from videoUrl and made optional
    image?: string // Made image optional since posts can have either video or image
  }
  stats: {
    likes: string
    comments: string
    bookmarks: string
    shares: string
  }
}
export interface VideoFeedProps {
  posts: IPost[]
}
