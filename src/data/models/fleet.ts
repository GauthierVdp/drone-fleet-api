import { Model, DataTypes, Sequelize } from 'sequelize';

class Fleet extends Model {
  public id!: number;
  public name!: string;

  static initModel(sequelize: Sequelize) {
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
      },
      {
        sequelize,
        tableName: 'fleets',
        timestamps: true,
      }
    );
  }
}

export default Fleet;
