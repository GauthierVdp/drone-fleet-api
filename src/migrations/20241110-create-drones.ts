import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('drone', {  // Make sure this is 'drone' (singular)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fleetId: {
        type: DataTypes.INTEGER,  // If fleetId is included, define it
        allowNull: true,  // Adjust if necessary
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('drone');  // Make sure this matches the table name (singular)
  },
};
