import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class FleetRepository {
  async getAll() {
    return await prisma.fleet.findMany();
  }

  async getById(id: number) {
    return await prisma.fleet.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return await prisma.fleet.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return await prisma.fleet.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.fleet.delete({
      where: { id },
    });
  }
}
