import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DroneRepository {
  async getAll() {
    return await prisma.drone.findMany();
  }

  async getById(id: number) {
    return await prisma.drone.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return await prisma.drone.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return await prisma.drone.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.drone.delete({
      where: { id },
    });
  }
}
