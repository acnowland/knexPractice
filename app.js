const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const connection = require("./knexfile").development;
const database = require("knex")(connection);

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Listening on port: ${port}`));

app.get("/students", (req, res) => {
  database("students").then((students) => res.send(students));
});

app.post("/students", (req, res) => {
  const student = req.body;

  database("students")
    .insert(student)
    .returning("*")
    .then((student) => res.send(student));
});
