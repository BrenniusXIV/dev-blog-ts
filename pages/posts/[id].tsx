import React from 'react'
import ReactMarkdown from 'react-markdown'
import { GetServerSideProps } from 'next'
import { PostProps } from '../../components/Post'
import Layout from '../../components/Layout'


const Post = (props : PostProps) => {
    return (
        <Layout>
            <div>
                <h2>{props.title}</h2>
                <p>By {props?.author?.name || 'unknown author'} at {props?.createdAt || 'unknown time'}</p>
                <ReactMarkdown>{props.content}</ReactMarkdown>
            </div>
        </Layout>
    )
}


export const getServerSideProps : GetServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/posts/${context?.params?.id}`)
    const data = await res.json()
    if (data.errorMessage || !data) {
        return {
            notFound: true
        }
    }
    return { props: { ...data } } 
}

export default Post