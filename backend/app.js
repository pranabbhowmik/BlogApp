import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authrouter from "./routers/user.router.js";
const app = express();

app.use(cors());
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true, limit: "50kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routing
app.use("/api/auth", authrouter);

export default app;
