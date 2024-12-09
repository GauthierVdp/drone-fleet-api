"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Fleet extends sequelize_1.Model {
    static initModel(sequelize) {
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
        }, {
            sequelize,
            tableName: 'fleets',
            timestamps: true,
        });
    }
}
exports.default = Fleet;
//# sourceMappingURL=fleet.js.map