"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    async up(queryInterface) {
        await queryInterface.addColumn('drones', 'missionId', {
            type: sequelize_1.DataTypes.INTEGER,
            references: { model: 'missions', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        });
    },
    async down(queryInterface) {
        await queryInterface.removeColumn('drones', 'missionId');
    },
};
//# sourceMappingURL=20241110-add-missionId-to-drones.js.map