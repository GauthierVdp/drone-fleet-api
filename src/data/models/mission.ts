import { Model, DataTypes, Sequelize } from 'sequelize';

class Mission extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
  public droneId!: number;

  static initModel(sequelize: Sequelize) {
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
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        droneId: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        tableName: 'missions',
        timestamps: true,
      }
    );
  }
}

export default Mission;
