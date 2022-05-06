import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../db/prisma'

export default async function requestUserByIdHandler(req: NextApiRequest, res: NextApiResponse) {
    const userId = String(req.query.id)

    switch (req.method){
        case 'GET':
            await handleGET(userId, res)
            break
        case 'PUT':
            await handlePUT(userId, req.body, res)
            break
        case 'DELETE':
            await handleDELETE(userId, res)
            break
        default:
            res.status(405)
            break
    }
}

async function handleGET(userId : string, res : NextApiResponse) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })
        user === null ? res.status(404).json({"errorMessage": `No record of user with ID #${userId}.`}) : res.status(200).json(user)    
    } catch (err) {
        res.status(400).json(err)
    }
}

async function handlePUT(userId: string, data: object, res : NextApiResponse) {
    try {
        const user = await prisma.user.update({
            where: { id: userId },
            data: { ...data }
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function handleDELETE(userId: string, res: NextApiResponse) {
    try{
        const user = await prisma.user.delete({
            where: { id: userId }
        })

        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}
