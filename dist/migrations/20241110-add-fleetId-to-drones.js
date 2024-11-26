"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.addColumn('drones', 'fleetId', {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'fleets', // Refers to the `fleets` table
                key: 'id',
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn('drones', 'fleetId');
    },
};
//# sourceMappingURL=20241110-add-fleetId-to-drones.js.map