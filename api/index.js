const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

const tareas = [
  { id: 1, titulo: "Aprender Docker" },
  { id: 2, titulo: "Desplegar app" }
];

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.listen(PORT, () => {
  console.log("API corriendo en puerto 3000");
});