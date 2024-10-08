import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// route imports

// configurations
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.get("/hello", (req, res) => {
  res.send("hello lol");
});

// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is runnign on port: ${port}`);
});
