import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../db/prisma'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, name } = req.body
    const postResult = await prisma.user.create({
        data: {
            email: email,
            name: name,
        }
    })
    res.status(200).json(postResult)
}