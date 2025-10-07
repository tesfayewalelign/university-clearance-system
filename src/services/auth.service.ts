// src/services/user.service.ts
import prisma from "../config/db.js";

export async function createUser(
  fullName: string,
  email: string,
  passwordHash: string,
  role = "student"
) {
  return prisma.user.create({
    data: { full_name: fullName, email, password: passwordHash, role },
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function findUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}
