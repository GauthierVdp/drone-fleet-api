"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Mission extends sequelize_1.Model {
}
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
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false, // Ensure that 'description' is not nullable
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    startDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Mission',
    tableName: 'mission', // Ensure this is the correct table name in the database
    timestamps: true, // Ensure Sequelize handles createdAt and updatedAt
});
exports.default = Mission;
//# sourceMappingURL=mission.js.map