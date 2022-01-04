import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import PostPreview, { PostProps } from "../components/PostPreview";
import styles from "../styles/Home.module.css";

type FeedProps = {
  feed: PostProps[];
};

const Home = ({ feed }: FeedProps) => {
  return (
    <Layout>
      <div className={styles.postContainer}>
        <p className={styles.post}>Welcome to my blog! I post about technical things I enjoy here, including my own work.</p>
      </div>
      <div className={styles.postContainer}>
        {feed.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostPreview
              title={post.title}
              content={post.content}
              id={post.id}
              author={post.author}
              createdAt={post.createdAt}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();
  feed.sort(
    (post1: PostProps, post2: PostProps) =>
      Date.parse(post2.createdAt) - Date.parse(post1.createdAt)
  );

  return {
    props: { feed },
  };
};

export default Home;
