import { Router } from "express";
import { getAllTodos, insertTodo, updateTodo, deleteTodo } from "../controllers/todos.controller.js";

const router = Router();

router.route("/GETAllTODOS").get(getAllTodos)

router.route("/INSERSTTODO").post(insertTodo);
router.route("/UPDATETODO").post(updateTodo);
router.route("/DELETETODO").delete(deleteTodo);

export default router;