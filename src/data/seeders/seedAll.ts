import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Seeding started...');

    // Seed Fleets
    console.log('Seeding fleets...');
    const fleetA = await prisma.fleet.create({
      data: {
        name: 'Fleet A',
        description: 'First fleet of drones', // Add the description
      },
    });
    
    const fleetB = await prisma.fleet.create({
      data: {
        name: 'Fleet B',
        description: 'Second fleet of drones', // Add the description
      },
    });
    
    console.log('Seeded fleets.');

    // Seed Drones
    console.log('Seeding drones...');
    await prisma.drone.createMany({
      data: [
        { name: 'Falcon', type: 'Quadcopter', status: 'active', fleetId: fleetA.id },
        { name: 'Eagle', type: 'Hexacopter', status: 'inactive', fleetId: fleetB.id },
      ],
    });
    console.log('Seeded drones.');

    // Seed Missions
    console.log('Seeding missions...');
    await prisma.mission.createMany({
      data: [
        {
          name: 'Search and Rescue',
          description: 'Search and rescue operation in a mountainous area.',
          status: 'in-progress',
          startDate: new Date(),
          endDate: null,
        },
        {
          name: 'Aerial Survey',
          description: 'Survey the area for potential construction sites.',
          status: 'completed',
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    });
    console.log('Seeded missions.');

    // Seed Pilots
    console.log('Seeding pilots...');
    const hashedPassword1 = await bcrypt.hash('password123', 10);
    const hashedPassword2 = await bcrypt.hash('securePass456', 10);

    await prisma.pilot.createMany({
      data: [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: hashedPassword1,
          license: 'A12345678',
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: hashedPassword2,
          license: 'B98765432',
        },
      ],
    });
    console.log('Seeded pilots.');

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
