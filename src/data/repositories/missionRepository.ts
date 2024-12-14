import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class MissionRepository {
  async getAll() {
    return await prisma.mission.findMany();
  }

  async getById(id: number) {
    return await prisma.mission.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return await prisma.mission.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return await prisma.mission.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.mission.delete({
      where: { id },
    });
  }
}
