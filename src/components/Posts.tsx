import React, { useEffect, useState } from 'react'
import { getPosts } from 'api'
import Post from 'components/Post'
import { IRedditPost } from 'constants/types'
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  ({ palette, spacing, transitions: { create, duration, easing } }: any) =>
    createStyles({
      list: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 16,
        gridAutoRows: 'auto',
        maxWidth: 500,
        margin: '16px auto'
      }
    })
)

const Posts = () => {
  const styles = useStyles()
  const [posts, setPosts] = useState<IRedditPost[]>([])

  useEffect(() => {
    const getData = async () => {
      const newPosts = await getPosts()
      // console.log(newPosts)
      setPosts(newPosts)
    }
    getData()
  }, [])

  return (
    <div className={styles.list}>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  )
}

export default Posts
