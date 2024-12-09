"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Seeding started...');
    // Seed Fleets
    const fleetA = await prisma.fleets.upsert({
        where: { name: 'Fleet A' },
        update: {},
        create: { name: 'Fleet A', description: 'First fleet of drones' },
    });
    const fleetB = await prisma.fleets.upsert({
        where: { name: 'Fleet B' },
        update: {},
        create: { name: 'Fleet B', description: 'Second fleet of drones' },
    });
    // Seed Drones
    await prisma.drones.createMany({
        data: [
            { name: 'Falcon', type: 'Quadcopter', status: 'active', fleetId: fleetA.id },
            { name: 'Eagle', type: 'Hexacopter', status: 'inactive', fleetId: fleetB.id },
        ],
        skipDuplicates: true,
    });
    // Seed Missions
    await prisma.missions.createMany({
        data: [
            { name: 'Search and Rescue', description: 'Rescue mission', status: 'in-progress', startDate: new Date() },
            { name: 'Aerial Survey', description: 'Survey mission', status: 'completed', startDate: new Date(), endDate: new Date() },
        ],
        skipDuplicates: true,
    });
    // Seed Pilots
    const hashedPassword1 = await bcryptjs_1.default.hash('password123', 10);
    const hashedPassword2 = await bcryptjs_1.default.hash('securePass456', 10);
    await prisma.pilots.createMany({
        data: [
            { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', password: hashedPassword1, license: 'A12345678' },
            { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', password: hashedPassword2, license: 'B98765432' },
        ],
        skipDuplicates: true,
    });
    console.log('Seeding completed.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seedAll.js.map