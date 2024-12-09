"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    async up(queryInterface) {
        await queryInterface.addColumn('mission', 'createdAt', {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        });
        await queryInterface.addColumn('mission', 'updatedAt', {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        });
    },
    async down(queryInterface) {
        await queryInterface.removeColumn('mission', 'createdAt');
        await queryInterface.removeColumn('mission', 'updatedAt');
    },
};
//# sourceMappingURL=add-timestamps-to-mission.js.map