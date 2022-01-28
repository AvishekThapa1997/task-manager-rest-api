import HttpException from "./HttpException";

class TaskNotFound extends HttpException {
  constructor(taskId: number, statusCode: number = 404, message: string = "") {
    super(statusCode, `No Task with id ${taskId}`);
  }
}
export default TaskNotFound;
