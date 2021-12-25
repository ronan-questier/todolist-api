const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get specific todo
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// creating todo
router.post("/", async (req, res) => {
  const todo = new Todo({
    content: req.body.content,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// updating todo
router.patch("/id", (req, res) => {});

// delete todo
router.delete("/:id", (req, res) => {});

module.exports = router;
