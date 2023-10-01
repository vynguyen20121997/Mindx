import express from "express";
import morgan from "morgan";
import rootRoute from "./routes/index.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

//login : method = post
//body:{email:string, pass: string}

app.use("/", rootRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
