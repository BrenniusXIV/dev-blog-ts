import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../db/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userId = Number(req.query.id)

    switch (req.method){
        case 'GET':
            handleGET(userId, res)
            break
        case 'DELETE':
            handleDELETE(userId, res)
            break
        default:
            res.status(400)
            break
    }
}

async function handleGET(userId : number, res : any) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    })

    res.status(200).json(user)
}

async function handleDELETE(userId: number, res: any) {
    const user = await prisma.user.delete({
        where: { id: userId }
    })

    res.status(200).json(user)
}
