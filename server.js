import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config()


const app = express();
connectDB();

app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));


app.use(express.json());
app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: { secure: false ,sameSite: "lax"}
}));

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
