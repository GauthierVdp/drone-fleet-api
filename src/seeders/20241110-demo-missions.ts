import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('mission', [
      {
        name: 'Search and Rescue',
        description: 'Search and rescue operation in a mountainous area.',
        fleetId: 1,  // Assuming the fleetId is 1, adjust as necessary
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
        fleetId: 2,  // Assuming fleetId 2 for another fleet
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('mission', {});
  },
};
