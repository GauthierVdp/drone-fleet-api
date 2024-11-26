import { Model, DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';

class Fleet extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

Fleet.init(
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
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Fleet',
    tableName: 'fleet', 
    timestamps: true,
  }
);

export default Fleet;
