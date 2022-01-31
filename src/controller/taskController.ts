import { Request, Response, NextFunction } from "express";
import HttpException from "../util/HttpException";
import * as taskService from "../services/taskService";
import Task, { TaskCreationAttributes } from "../model/Task";
import TaskNotCreated from "../util/TaskNotCreated";
import TaskNotFound from "../util/TaskNotFound";
import asyncWrapper from "../middleware/asyncWrapper";

export const getTasks = asyncWrapper(
  async (_req: Request, res: Response, next: NextFunction) => {
    const tasks = await taskService.getTasks();
    res.status(200).send({
      data: tasks,
    });
  }
);

export const createTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const task = req.body as TaskCreationAttributes;
    if (task.isCompleted === null || req.body.isCompleted === "") {
      task.isCompleted = false;
    }
    const taskCreated = await taskService.createTask(task);
    if (!taskCreated) {
      return next(new TaskNotCreated());
    }
    res.status(201).send({
      data: taskCreated,
    });
  }
);

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const taskId = +req.params.taskId;
    const task = await taskService.getTask(taskId);
    if (!task) {
      return next(new TaskNotFound(taskId));
    }
    res.status(200).send({
      data: task,
    });
  }
);

export const updateTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const taskId = +req.params.taskId;
    const taskBody = req.body as TaskCreationAttributes;
    const oldTask = await taskService.getTask(taskId, true);
    if (!oldTask) {
      return next(new TaskNotFound(taskId));
    }
    const [noOfTaskUpdated] = await taskService.updateTask(
      taskId,
      taskBody.task
    );
    if (!noOfTaskUpdated) {
      return next(new HttpException());
    }
    res.status(200).send({
      data: {
        ...oldTask,
        task: taskBody.task,
      },
    });
  }
);
export const updateTaskCompletionStatus = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const taskId = +req.params.taskId;
    const oldTask = await taskService.getTask(taskId, true);
    const taskCompletionStatus = req.body as { isCompleted: string };
    if (!oldTask) {
      return next(new TaskNotFound(+taskId));
    }
    const [noOfTaskUpdated] = await taskService.updateTaskCompletionStatus(
      taskId,
      taskCompletionStatus.isCompleted === "true"
    );
    if (!noOfTaskUpdated) {
      return next(new HttpException());
    }
    res.status(201).send({
      data: {
        ...oldTask,
        isCompleted: taskCompletionStatus.isCompleted === "true",
      },
    });
  }
);
export const deleteTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const taskId = +req.params.taskId;
    const oldTask = await taskService.getTask(taskId);
    if (!oldTask) {
      return next(new TaskNotFound(+taskId));
    }
    const taskDeleted = await taskService.deleteTask(taskId);
    if (!taskDeleted) {
      return next(new HttpException());
    }
    res.status(200).send({
      message: "Successfully deleted",
      data: oldTask,
    });
  }
);
