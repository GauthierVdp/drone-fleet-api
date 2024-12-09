import { Model, DataTypes, Sequelize } from 'sequelize';

class Drone extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public status!: string;
  public fleetId!: number;

  static initModel(sequelize: Sequelize) {
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
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'drones',
        timestamps: true,
      }
    );
  }
}

export default Drone;
