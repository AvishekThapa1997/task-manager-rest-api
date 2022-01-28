import express from "express";
import taskRouter from "./route/taskRoute";
import errorMiddleware from "./middleware/errorMiddleware";
import notFoundMiddleware from "./middleware/404";
import dbConfig from "./config/db/dbConfig";
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api", taskRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
dbConfig.sync().then(() => {
  app.listen(process.env.PORT || 3000);
});
