import express from "express";

import Contactmessage from "../controllers/contact.controller.js";
const contactRouter = express.Router();

contactRouter.post("/contact", Contactmessage);

export default contactRouter;
