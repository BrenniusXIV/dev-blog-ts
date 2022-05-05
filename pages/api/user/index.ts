import { hash } from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, password } : { email: string, name: string, password: string} = req.body;

  try {
  const hashedPassword = await hash(password, 10);
  const postResult = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: hashedPassword,
    },
  });
  res.status(200).json(postResult);
} catch (error) {
  res.status(400).json({"errorMessage": "Email address is already in use."})
}
}
