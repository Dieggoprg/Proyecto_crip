import express from "express";
import { connectDB } from "./src/config/database.js";
import "dotenv/config"
const app = express();

app.use(express.json());

// test conexión BD
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Servidor escuchando en el puerto", PORT);
    });
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
  }
}

startServer();
