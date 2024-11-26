import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const mission1 = await prisma.mission.create({
    data: {
      name: 'Recon Mission',
      status: 'active',
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const mission2 = await prisma.mission.create({
    data: {
      name: 'Surveillance Mission',
      status: 'inactive',
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const fleet = await prisma.fleet.create({
    data: {
      name: 'Alpha Fleet',
      drones: {
        create: [
          {
            name: 'Drone A',
            type: 'Quadcopter',
            status: 'active',
            missionId: mission1.id, 
          },
          {
            name: 'Drone B',
            type: 'Hexacopter',
            status: 'inactive',
            missionId: mission2.id,
          },
        ],
      },
    },
  });

  console.log('Fleet and Drones created successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
