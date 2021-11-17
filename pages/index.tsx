import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Post, { PostProps } from '../components/Post'

type FeedProps = {
  feed: PostProps[]
}

const Home = ({feed} : FeedProps) => {
  return (
    <Layout>
      {feed.map(post => (
          <div key={post.id}>
            <Post title={post.title} content={post.content} id={post.id} author={post.author} createdAt={post.createdAt}/>
          </div>
        ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/feed')
  const feed = await res.json()
  return {
    props: { feed },
  }
}

export default Home
