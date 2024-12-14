"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Mission extends sequelize_1.Model {
    static initModel(sequelize) {
        Mission.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            droneId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
        }, {
            sequelize,
            tableName: 'missions',
            timestamps: true,
        });
    }
}
exports.default = Mission;
