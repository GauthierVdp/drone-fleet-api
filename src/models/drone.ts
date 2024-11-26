import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Drone extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public status!: string;
  public fleetId!: number;  // If fleetId is required
}

Drone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fleetId: {
      type: DataTypes.INTEGER,  // Add if necessary
      allowNull: true,  // Adjust this based on whether fleetId is required
    },
  },
  {
    sequelize,
    modelName: 'Drone',
    tableName: 'drone',  // Ensure the table name matches your database table (singular)
    timestamps: true,
  }
);

export default Drone;
