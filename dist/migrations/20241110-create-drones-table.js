"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable('drones', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: sequelize_1.DataTypes.ENUM('active', 'inactive', 'maintenance'),
                allowNull: false,
            },
            fleetId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true, // If fleetId can be null
                references: {
                    model: 'fleets', // Replace with the actual table name if it's different
                    key: 'id',
                },
                onDelete: 'SET NULL', // Or choose another action like 'CASCADE' or 'RESTRICT'
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
        await queryInterface.dropTable('drones');
    },
};
//# sourceMappingURL=20241110-create-drones-table.js.map