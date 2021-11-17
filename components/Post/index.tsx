import React from "react"
import Router from "next/router"

export type PostProps = {
    id: number;
    title: string;
    author: {
        name: string;
    }
    content: string;
    createdAt: string;
}


const Post = (post : PostProps) => {
    const authorName = post.author ? post.author.name : 'unknown author'
    return (
        <div onClick={() => Router.push('/posts/[id]', `/posts/${post.id}`)}>
            <h2>{post.title}</h2>
            <small>Posted by {authorName}</small>
            <p>{post.content}</p>
        </div>
    )
}

export default Post