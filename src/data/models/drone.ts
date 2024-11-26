import { Model, DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';

class Drone extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public status!: string;
  public fleetId!: number;
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
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Drone',
    tableName: 'drone',
    timestamps: true,
  }
);

export default Drone;
