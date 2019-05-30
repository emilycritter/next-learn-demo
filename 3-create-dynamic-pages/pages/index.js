import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
)

export default function Index() {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learning Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
