import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../db/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const postId = Number(req.query.id)

    switch (req.method){
        case 'GET':
            await handleGET(postId, res)
            break
        case 'PUT':
            await handlePUT(postId, req.body, res)
            break
        case 'DELETE':
            await handleDELETE(postId, res)
            break
        default:
            res.status(400)
            break
    }
}

async function handleGET(postId : number, res : NextApiResponse) {
    try {
        const post = await prisma.post.findUnique({
            where: { id: postId },
            include: { author: true },
        })

        post === null ? res.status(404).json({"errorMessage": `No record of post with ID #${postId}.`}) : res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function handlePUT(postId : number, data: object, res : NextApiResponse) {
    try {
        const post = await prisma.post.update({
            where: { id: postId },
            data: { ...data }
        })
        res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}



async function handleDELETE(postId: number, res: NextApiResponse) {
    try {
        const post = await prisma.post.delete({
            where: { id: postId }
        })
        res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}
