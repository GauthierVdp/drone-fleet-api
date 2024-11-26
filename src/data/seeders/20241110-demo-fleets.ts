import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('fleet', [
      { name: 'Fleet A', description: 'First fleet of drones', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fleet B', description: 'Second fleet of drones', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('fleet', {});
  },
};
