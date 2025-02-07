import express from "express";
import {
  login,
  register,
  logout,
  deleteUser,
} from "../controllers/user.controller.js";

const authrouter = express.Router();

authrouter.post("/register", register);
authrouter.post("/login", login);
authrouter.post("/logout", logout);
authrouter.delete("/delete", deleteUser);

export default authrouter;
