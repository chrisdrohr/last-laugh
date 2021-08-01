const redditURL = 'https://www.reddit.com/r/ProgrammerHumor/top/'

export const getPosts: () => Promise<any> = async () => {
  const response = await fetch(`${redditURL}.json?limit=20`)
  const posts: { data: { children: any[] } } = await response.json()
  return posts?.data?.children || []
}
