import { Sequelize, Model, DataTypes } from 'sequelize';
import { Models } from '.';

export class Tasks extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
  }
}

export const taskModel = (sequelize: Sequelize, DT: typeof DataTypes) => {
  Tasks.init(
    {
      title: {
        type: DT.STRING,
        allowNull: false,
      },
      description: {
        type: DT.TEXT,
        defaultValue: '',
      },
      status: {
        type: DT.STRING,
      },
      Date: {
        type: DT.DATE,
        field: 'due_date',
      },
    },
    {
      sequelize,
      modelName: 'Task',
      underscored: true,
    },
  );
  return Tasks;
};
