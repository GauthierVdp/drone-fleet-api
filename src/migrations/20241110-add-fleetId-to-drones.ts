import { DataTypes, QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addColumn('drones', 'fleetId', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'fleets',
        key: 'id',
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeColumn('drones', 'fleetId');
  },
};
