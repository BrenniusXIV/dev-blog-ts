import React from "react";
import BlogPost from "../../components/BlogPost";
import { GetServerSideProps } from "next";
import { PostProps } from "../../components/PostPreview";
import Layout from "../../components/Layout";

const Post = (post: PostProps) => {
  return (
    <Layout>
      <BlogPost {...post}/>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context?.params?.id}`
  );
  const data = await res.json();
  if (data.errorMessage || !data) {
    return {
      notFound: true,
    };
  }
  return { props: { ...data } };
};

export default Post;
