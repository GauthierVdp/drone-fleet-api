"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Drone extends sequelize_1.Model {
}
Drone.init({
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fleetId: {
        type: sequelize_1.DataTypes.INTEGER, // Add if necessary
        allowNull: true, // Adjust this based on whether fleetId is required
    },
}, {
    sequelize: database_1.default,
    modelName: 'Drone',
    tableName: 'drone', // Ensure the table name matches your database table (singular)
    timestamps: true,
});
exports.default = Drone;
//# sourceMappingURL=drone.js.map