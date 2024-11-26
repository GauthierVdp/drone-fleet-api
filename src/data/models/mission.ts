import { Model, DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';

class Mission extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public status!: string;
  public startDate!: Date;
  public endDate!: Date;
  public createdAt!: Date; 
  public updatedAt!: Date; 
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
      allowNull: false,  
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
    tableName: 'mission', 
    timestamps: true, 
  }
);

export default Mission;
