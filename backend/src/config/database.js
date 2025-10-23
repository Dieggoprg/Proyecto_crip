import mongoose from "mongoose";

export const connectDB = async () => {
  try { 
    mongoose.connect('mongodb://127.0.0.1:27017/proyecto_crip');
    return console.log("✅ Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos", error);
  }
};
