import express from "express";
import dotnv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";

dotnv.config();
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(8080, () => {console.log('server running on port 8080')});