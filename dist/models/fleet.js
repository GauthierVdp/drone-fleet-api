"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Fleet extends sequelize_1.Model {
}
Fleet.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // This is optional
    },
}, {
    sequelize: database_1.default,
    modelName: 'Fleet',
    tableName: 'fleet', // Ensure the table name matches the actual table name in MySQL
    timestamps: true, // This will create createdAt and updatedAt fields automatically
});
exports.default = Fleet;
//# sourceMappingURL=fleet.js.map