import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  try {
    // Test: fetch all users
    const users = await prisma.user.findMany();
    console.log("✅ Users in database:", users);
  } catch (err) {
    console.error("❌ Error connecting to Prisma/MySQL:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
