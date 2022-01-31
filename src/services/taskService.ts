import Task, { TaskCreationAttributes } from "../model/Task";
export const getTasks = () => {
  return Task.findAll();
};

export const createTask = (task: TaskCreationAttributes) => {
  return Task.create(task);
};

export const getTask = (taskId: number, raw: boolean = false) => {
  return Task.findByPk(taskId, {
    raw,
  });
};

export const updateTask = (taskId: number, task: string) => {
  return Task.update(
    {
      task: task,
    },
    {
      where: {
        id: taskId,
      },
    }
  );
};
export const updateTaskCompletionStatus = (
  taskId: number,
  taskCompletionStatus: boolean
) => {
  return Task.update(
    { isCompleted: taskCompletionStatus },
    {
      where: {
        id: taskId,
      },
    }
  );
};
export const deleteTask = (taskId: number) => {
  return Task.destroy({
    where: {
      id: taskId,
    },
  });
};
