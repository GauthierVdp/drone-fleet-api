"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Seeding started...');
            console.log('Seeding fleets...');
            const fleetA = yield prisma.fleet.create({
                data: {
                    name: 'Fleet A',
                    description: 'First fleet of drones',
                },
            });
            const fleetB = yield prisma.fleet.create({
                data: {
                    name: 'Fleet B',
                    description: 'Second fleet of drones',
                },
            });
            console.log('Seeded fleets.');
            console.log('Seeding drones...');
            console.log('Fleet A ID:', fleetA.id);
            console.log('Fleet B ID:', fleetB.id);
            yield prisma.drone.createMany({
                data: [
                    { name: 'Falcon', type: 'Quadcopter', status: 'active', fleetId: fleetA.id },
                    { name: 'Eagle', type: 'Hexacopter', status: 'inactive', fleetId: fleetB.id },
                ],
            });
            console.log('Seeded drones.');
            console.log('Seeding missions...');
            yield prisma.mission.createMany({
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
            console.log('Seeding pilots...');
            const hashedPassword1 = yield bcryptjs_1.default.hash('password123', 10);
            const hashedPassword2 = yield bcryptjs_1.default.hash('securePass456', 10);
            yield prisma.pilot.deleteMany();
            yield prisma.pilot.createMany({
                data: [
                    {
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'john.doe@example.com', // Ensure this email is unique
                        password: hashedPassword1,
                        license: 'A12345678',
                    },
                    {
                        firstName: 'Jane',
                        lastName: 'Smith',
                        email: 'jane.smith@example.com', // Ensure this email is unique
                        password: hashedPassword2,
                        license: 'B98765432',
                    },
                ],
            });
            console.log('Seeded pilots.');
            console.log('Seeding completed successfully.');
        }
        catch (error) {
            console.error('Error during seeding:', error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
main()
    .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
