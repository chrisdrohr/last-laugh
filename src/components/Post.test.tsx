import {render, screen} from '@testing-library/react'
import Post from './Post'

const postProps = {
  author: 'author',
  backgroundColor: 'backgroundColor',
  commentsCount: 0,
  imageURL: 'imageURL',
  permalink: 'permalink',
  title: 'title',
  upVotes: 0,
  videoURL: 'videoURL',
  index: 0
}

test('link title renders properly', async () => {
  render(<Post {...postProps}/>)

  const titleLink = await screen.findByTitle('View post on reddit.com')

  expect(titleLink.innerHTML).toEqual(postProps.title)
  // @ts-ignore
  expect(titleLink.href).toEqual('http://localhost/permalink')
})

test('img renders properly', async () => {
  render(<Post {...postProps} />)

  const imgEl = await screen.findByAltText(postProps.title)

  // @ts-ignore
  expect(imgEl.src).toEqual('http://localhost/imageURL')
})

test('commentsCount el renders properly', async () => {
  render(<Post {...postProps} />)

  const commentsCount = await screen.findByTitle('Comments')

  expect(commentsCount.innerHTML.charAt(0)).toEqual(`${postProps.commentsCount}`)
})

test('Upvotes el renders properly', async () => {
  render(<Post {...postProps} />)

  const commentsCount = await screen.findByTitle('Upvotes')

  expect(commentsCount.innerHTML.charAt(0)).toEqual(`${postProps.upVotes}`)
})

