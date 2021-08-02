import { IRedditPost } from 'constants/types'
import {orange, blue} from "@material-ui/core/colors";

const baseRedditURL = 'https://www.reddit.com'
const redditURL = `${baseRedditURL}/r/ProgrammerHumor/top/`

export const getPosts: () => Promise<any> = async () => {
  const response = await fetch(`${redditURL}.json?limit=20&sort=new`)
  const posts: { data: { children: any[] } } = await response.json()
  return formatPosts(posts?.data?.children || [])
}

const formatPosts: (posts: any[]) => IRedditPost[] = (posts: any[]) => {
  const formattedPosts: IRedditPost[] = posts.map((post) => {
    // console.log(post.data);
    const { author, num_comments, permalink, score, ups, url, title } =
      post.data
    let imageURL, videoURL
    if (url.startsWith('https://i.redd.it')) {
      imageURL = url
    } else if (url.startsWith('https://v.redd.it')) {
      videoURL = url
    }
    return {
      author: `u/${author}`,
      backgroundColor: score % 2 === 0 ? orange[500] : blue[500],
      commentsCount: num_comments,
      imageURL,
      videoURL,
      permalink: `${baseRedditURL}${permalink}`,
      title,
      upVotes: ups
    }
  })

  formattedPosts.sort(
    (first, second) => second.commentsCount - first.commentsCount
  )
  return formattedPosts
}
