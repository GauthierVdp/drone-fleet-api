"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable('missions', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                defaultValue: 'in-progress',
            },
            droneId: {
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: 'drones', // Foreign key referencing the drones table
                    key: 'id',
                },
                allowNull: false,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('missions');
    },
};
//# sourceMappingURL=20241110-create-missions-table.js.map