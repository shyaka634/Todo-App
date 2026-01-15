import express from "express";
import Todo from "../models/Todo.js";
import isAuth from "../middleware/authMiddleware.js";

const router = express.Router();

/* =========================
   GET ALL TODOS
   ========================= */
router.get("/", isAuth, async (req, res) => {
  const todos = await Todo.find({
    userId: req.session.userId
  });

  res.json(todos);
});

/* =========================
   CREATE A TODO
   ========================= */
router.post("/", isAuth, async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    userId: req.session.userId
  });

  await todo.save();
  res.json(todo);
});

/* =========================
   DELETE A TODO
   ========================= */
router.delete("/:id", isAuth, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

export default router;
