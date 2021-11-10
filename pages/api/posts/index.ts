import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../db/prisma'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, content, authorId } = req.body
    const postResult = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: {
                connect: {
                    id: authorId
                }
            },
        }
    })
    res.status(200).json(postResult)
}