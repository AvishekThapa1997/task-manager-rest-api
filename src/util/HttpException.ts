class HttpException extends Error {
  statusCode: number;
  message: string;
  constructor(
    statusCode: number = 500,
    message: string = "Something went wrong"
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default HttpException;
