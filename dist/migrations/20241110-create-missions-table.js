"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    async up(queryInterface) {
        await queryInterface.createTable('missions', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true,
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                defaultValue: 'pending',
            },
            startDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            endDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('missions');
    },
};
//# sourceMappingURL=20241110-create-missions-table.js.map