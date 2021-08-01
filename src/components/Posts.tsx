import React, { useEffect } from 'react'
import { getPosts } from 'api'

const Posts = () => {
  useEffect(() => {
    const getData = async () => {
      const posts = await getPosts()
    }
    getData()
  }, [])
  return <div>hello</div>
}

export default Posts
