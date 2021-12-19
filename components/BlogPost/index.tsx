import React from "react";
import ReactMarkdown from "react-markdown";
import { PostProps } from "../PostPreview";
import styles from "../../styles/BlogPost.module.css";

const PostPreview = (post: PostProps) => {
  const authorName = post.author ? post.author.name : "unknown author";
  const postedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString()
    : "unknown time";
  return (
    <main className={styles.postContainer}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <section className={styles.postMetadata}>
        <p>By {authorName}</p>
        <p>Posted at {postedDate}</p>
      </section>
      <article className={styles.postMarkdownContainer}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
};

export default PostPreview;
