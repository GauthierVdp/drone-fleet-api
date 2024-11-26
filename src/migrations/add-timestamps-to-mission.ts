import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.addColumn('mission', 'createdAt', {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    });
    await queryInterface.addColumn('mission', 'updatedAt', {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeColumn('mission', 'createdAt');
    await queryInterface.removeColumn('mission', 'updatedAt');
  },
};
