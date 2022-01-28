import { Optional, Model, DataTypes } from "sequelize";
import dbConfig from "../config/db/dbConfig";
export interface TaskAttributes {
  id: number;
  task: string;
  isCompleted: Boolean;
}

export interface TaskCreationAttributes
  extends Optional<TaskAttributes, "id"> {}
class Task extends Model<TaskAttributes, TaskCreationAttributes> {
  declare id: number;
  declare task: string;
  declare isCompleted: boolean;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: () => false,
    },
  },
  {
    sequelize: dbConfig,
    tableName: "task",
  }
);
export default Task;
