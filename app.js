require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const database = mongoose.connection;
database.on("error", (error) => console.error(error));
database.once("open", () => console.info("Connected to the database."));

app.use(express.json());

const todosRouter = require("./routes/todos");
app.use("/todos", todosRouter);

app.listen(3030, () => {
  console.info("http://127.0.0.1:3030");
});
