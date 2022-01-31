import { Router } from "express";
import { body, param } from "express-validator";
import validationMiddleware from "../middleware/validationMiddleware";
import MESSAGE from "../util/message";
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  updateTaskCompletionStatus,
} from "../controller/taskController";

const taskRouter = Router();

taskRouter
  .route("/tasks")
  .get(getTasks)
  .post(
    [
      body("task")
        .trim()
        .notEmpty()
        .withMessage(MESSAGE.invalidInput)
        .isLength({
          min: 6,
        })
        .withMessage(MESSAGE.taskTooShort),
      body("isCompleted", MESSAGE.invalidTaskCompletedInput).custom((value) => {
        if (value) {
          return value.toString() === "true" || value.toString() === "false";
        }
        return true;
      }),
    ],
    validationMiddleware,
    createTask
  );
taskRouter
  .route("/tasks/:taskId")
  .all(
    [param("taskId", MESSAGE.invalidTaskId).isNumeric()],
    validationMiddleware
  )
  .get(getTask)
  .patch(
    [
      body("task")
        .trim()
        .notEmpty()
        .withMessage(MESSAGE.invalidInput)
        .isLength({
          min: 6,
        })
        .withMessage(MESSAGE.taskTooShort),
      body("isCompleted", MESSAGE.invalidTaskCompletedInput).custom((value) => {
        if (value) {
          return value.toString() === "true" || value.toString() === "false";
        }
        return true;
      }),
    ],
    validationMiddleware,
    updateTask
  )
  .delete(deleteTask);
taskRouter.patch(
  "/tasks/:taskId/complete",
  body("isCompleted", MESSAGE.invalidTaskCompletedInput).isBoolean(),
  validationMiddleware,
  updateTaskCompletionStatus
);
export default taskRouter;
