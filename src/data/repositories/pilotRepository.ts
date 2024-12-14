import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class PilotRepository {
  async getAll() {
    return await prisma.pilot.findMany();
  }

  async getById(id: number) {
    return await prisma.pilot.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return await prisma.pilot.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return await prisma.pilot.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.pilot.delete({
      where: { id },
    });
  }
}
