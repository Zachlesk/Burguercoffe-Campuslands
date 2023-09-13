import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function conexionMongo() {
  try {
    await client.connect();
    console.log("¡Has sido conectado a la base de datos!");
  } catch (error) {
    console.error("Error:", error);
  }
}
