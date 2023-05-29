import express from "express";
import { auth } from "../../middleWare/auth.js";
import { validation } from "../../middleWare/validation.js";
import * as controllers from "../message/controller/message.controller.js"
import { messageSchema } from "./message.validation.js";
export const messageRoute = express.Router();

//-- send message --//
messageRoute.post("/sendMessage/:id",validation(messageSchema),controllers.sendMessage)

//-- get message --//
messageRoute.get("/getUserMessages",auth,controllers.getUserMessages)