const express = require("express");
const router = express.Router();

// get all todos
router.get("/", (req, res) => {
  res.send("Hello World !");
});

// get specific todo
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// creating todo
router.post("/", (req, res) => {});

// updating todo
router.patch("/id", (req, res) => {});

// delete todo
router.delete("/:id", (req, res) => {});

module.exports = router;
