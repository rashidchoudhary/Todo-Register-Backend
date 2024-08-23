import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connection = mongoose.connection;
connection.once("connected", () => console.log("Database has Connected..."));
connection.on("error", (error) => console.log("Database Error: ", error));
mongoose.connect("mongodb://localhost:27017/todo_register");

app.use("/user", userRouter);

app.listen(3000, () => console.log("Server has Started..."));