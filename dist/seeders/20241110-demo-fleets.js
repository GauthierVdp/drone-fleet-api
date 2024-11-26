"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('fleets', [
            { name: 'Fleet A', description: 'First fleet of drones', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Fleet B', description: 'Second fleet of drones', createdAt: new Date(), updatedAt: new Date() },
        ]);
    },
    async down(queryInterface, Sequelize) {
        // Use an empty object to delete all records
        await queryInterface.bulkDelete('fleets', {});
    },
};
//# sourceMappingURL=20241110-demo-fleets.js.map