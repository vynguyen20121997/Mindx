import express from "express";
import morgan from "morgan";
import rootRoute from "./routes/index.js";
import databaseService from "./services/database.service.js";
import { defaultErrorHandler } from "./middlewares/error.middleware.js";
databaseService.connect();
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", rootRoute);
app.use(defaultErrorHandler);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
