import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Mission extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public status!: string;
  public startDate!: Date;
  public endDate!: Date;
  public createdAt!: Date; // Optional if Sequelize manages this field automatically
  public updatedAt!: Date; // Optional if Sequelize manages this field automatically
}

Mission.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,  // Ensure that 'description' is not nullable
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Mission',
    tableName: 'mission',  // Ensure this is the correct table name in the database
    timestamps: true,  // Ensure Sequelize handles createdAt and updatedAt
  }
);

export default Mission;
