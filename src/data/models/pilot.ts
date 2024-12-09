import { Model, DataTypes, Sequelize } from 'sequelize';

class Pilot extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public license!: string;

  static initModel(sequelize: Sequelize) {
    Pilot.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        license: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'pilots',
        timestamps: true,
      }
    );
  }
}

export default Pilot;
