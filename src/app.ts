import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandler , notFoundMiddleware } from "./middleware/errorHandler";
import cors from "cors";
import { connectDb } from "./config/db";
import { corOptions } from "./util/cors";
import userRoute from "./routes/userRoute";
dotenv.config();
const app: Express = express();


// test db
connectDb()
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corOptions))
app.use("/credpal/user", userRoute);
app.use(errorHandler);
app.use(notFoundMiddleware);

export default app;
