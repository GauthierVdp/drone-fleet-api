import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
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

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('drones', {});
  },
};
