import React, { useEffect, useState, useRef } from 'react'
import { getPosts } from 'api'
import Post from 'components/Post'
import { IRedditPost } from 'constants/types'
import { createStyles, makeStyles } from '@material-ui/core'
import { useOnLoad } from 'constants/hooks'

const useStyles = makeStyles(
  ({breakpoints, transitions: { create, duration, easing } }: any) =>
    createStyles({
      list: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 16,
        gridAutoRows: 'auto',
        maxWidth: 500,
        margin: '16px auto',
        transition: create(['opacity', 'transform'], duration.enteringScreen, easing.easeOut),
        opacity: loaded => loaded ? 1 : 0,
        transform: loaded => `translateY(${loaded ? 0 : 500}px)`,
        transitionDelay: duration.enteringScreen,
        [breakpoints.up('md')]: {
          maxWidth: 800,
          gridTemplateColumns: '1fr 1fr',
        },
        [breakpoints.up('lg')]: {
          maxWidth: 1200,
          gridTemplateColumns: '1fr 1fr 1fr',
        },
      }
    })
)

const Posts = () => {
  const loaded = useOnLoad()
  const ref = useRef<HTMLDivElement>(null)
  const [posts, setPosts] = useState<IRedditPost[]>([])
  const styles = useStyles(loaded && posts.length)

  useEffect(() => {
    const getData = async () => {
      const newPosts = await getPosts()
      setPosts(newPosts)
    }
    getData()
  }, [])

  return (
    <div ref={ref} className={styles.list}>
      {posts.map((post, index) => (
        <Post key={index} index={index} {...post} />
      ))}
    </div>
  )
}

export default Posts
