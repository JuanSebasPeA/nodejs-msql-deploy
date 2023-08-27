import express from "express";
// importando la conexión con la base de datos
import { pool } from "./db.js"
import { PORT } from "./config.js";

const app = express();

//rutas
app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    console.log(rows);
    res.json(rows)
})

app.get("/ping", async (req, res) => {
    //ejecutando una consulta con el objeto pool
    const [result] = await pool.query('SELECT "HELLO WORLD" as RESULT');
    console.log(result[0]);
    res.json(result[0])
  });

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("Sebastian")');
    res.json(result)
})


app.listen(PORT, () => {
  console.log("Example app listening on port 4000!");
});
