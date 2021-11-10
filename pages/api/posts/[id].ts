import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../db/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const postId = Number(req.query.id)

    switch (req.method){
        case 'GET':
            handleGET(postId, res)
        case 'DELETE':
            handleDELETE(postId, res)
    }
}

async function handleGET(postId : number, res : any) {
    const post = await prisma.post.findUnique({
        where: { id: postId },
        include: { author: true },
    })

    res.status(200).json(post)
}

async function handleDELETE(postId: number, res: any) {
    const post = await prisma.post.delete({
        where: { id: postId }
    })

    res.status(200).json(post)
}
