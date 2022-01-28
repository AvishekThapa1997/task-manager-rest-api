import HttpException from "./HttpException";

class TaskNotCreated extends HttpException {
  constructor(statusCode?: number, message?: string) {
    super(statusCode, message);
  }
}
export default TaskNotCreated;
