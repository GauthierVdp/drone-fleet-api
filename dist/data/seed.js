"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // First, create the Mission records
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
    // Now, create the Fleet with Drones, referencing the created Missions
    const fleet = await prisma.fleet.create({
        data: {
            name: 'Alpha Fleet',
            drones: {
                create: [
                    {
                        name: 'Drone A',
                        type: 'Quadcopter',
                        status: 'active',
                        missionId: mission1.id, // Use the ID from the first mission
                    },
                    {
                        name: 'Drone B',
                        type: 'Hexacopter',
                        status: 'inactive',
                        missionId: mission2.id, // Use the ID from the second mission
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
//# sourceMappingURL=seed.js.map