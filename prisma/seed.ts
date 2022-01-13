import { PrismaClient } from "@prisma/client";
import { testPosts, testUsers } from "../db/seeds";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: testUsers,
  });
  await prisma.post.createMany({
    data: testPosts,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
