import type { NextApiRequest, NextApiResponse } from "next";
import { hash, compare } from "bcryptjs";
import prisma from "../../../db/prisma";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password }: { email: string, password: string } = req.body;

  const userResult = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userResult) {
    const validPassword = await compare(password, userResult.password);
    if (!validPassword) {
      res
        .status(403)
        .json({ message: "Incorrect password. Please try again." });
    }
    res.status(200).json(userResult);
  } else {
    res
      .status(400)
      .json({
        message: "No user found by that email and password. Please try again.",
      });
  }
}
