import express from "express";
import { getLikes, likeBlog } from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.post("/like", likeBlog);
likeRouter.get("/likes/:postId", getLikes);

export default likeRouter;
