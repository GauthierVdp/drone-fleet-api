"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('drones', [
            {
                name: 'Falcon',
                model: 'X1000',
                status: 'active',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Eagle',
                model: 'Z2000',
                status: 'maintenance',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Hawk',
                model: 'A3000',
                status: 'inactive',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete('drones', {});
    },
};
//# sourceMappingURL=20241110-demo-drones.js.map