"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('fleet', [
            { name: 'Fleet A', description: 'First fleet of drones', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Fleet B', description: 'Second fleet of drones', createdAt: new Date(), updatedAt: new Date() },
        ]);
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete('fleet', {});
    },
};
//# sourceMappingURL=20241110-demo-fleets.js.map