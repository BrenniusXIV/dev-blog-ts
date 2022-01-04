import React from "react";
import Router from "next/router";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
  };
  content: string;
  createdAt: string;
};

const PostPreview = (post: PostProps) => {
  const authorName = post.author ? post.author.name : "unknown author";
  return (
    <div onClick={() => Router.push("/posts/[id]", `/posts/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>Posted by {authorName}</small>
      <p>Originally posted: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostPreview;
