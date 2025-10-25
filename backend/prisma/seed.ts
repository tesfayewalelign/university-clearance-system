import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("ABUwalelign@2016", 10);

  const superAdmin = await prisma.user.upsert({
    where: { email: "tesfayewalelign2@gmail.com" },
    update: {},
    create: {
      full_name: "Tesfaye Walelign",
      email: "tesfayewalelign2@gmail.com",
      password: password,
      role: "SUPER_ADMIN",
    },
  });

  console.log("Super Admin created:", superAdmin);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
