import Task, { TaskCreationAttributes } from "../model/Task";
export const getTasks = () => {
  return Task.findAll();
};

export const createTask = (task: TaskCreationAttributes) => {
  return Task.create(task);
};

export const getTask = (taskId: number) => {
  return Task.findByPk(taskId);
};

export const updateTask = (
  taskId: number,
  taskToBeUpdated: TaskCreationAttributes
) => {
  return Task.update(taskToBeUpdated, {
    where: {
      id: taskId,
    },
  });
};
export const deleteTask = (taskId: number) => {
  return Task.destroy({
    where: {
      id: taskId,
    },
  });
};
