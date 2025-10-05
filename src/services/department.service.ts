import prisma from "../config/db.js";

export const createDepartment = async (data: any) => {
  return prisma.department.create({ data });
};

export const getDepartments = async () => {
  return prisma.department.findMany();
};

export const updateDepartment = async (id: number, data: any) => {
  return prisma.department.update({
    where: { id },
    data,
  });
};

export const deleteDepartment = async (id: number) => {
  return prisma.department.delete({
    where: { id },
  });
};
