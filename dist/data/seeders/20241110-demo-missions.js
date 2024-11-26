"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('mission', [
            {
                name: 'Search and Rescue',
                description: 'Search and rescue operation in a mountainous area.',
                fleetId: 1, // Assuming the fleetId is 1, adjust as necessary
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Aerial Survey',
                description: 'Aerial survey for mapping the new construction site.',
                fleetId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Disaster Relief',
                description: 'Provide disaster relief by delivering medical supplies.',
                fleetId: 2, // Assuming fleetId 2 for another fleet
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete('mission', {});
    },
};
//# sourceMappingURL=20241110-demo-missions.js.map