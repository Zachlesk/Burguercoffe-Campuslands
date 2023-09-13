import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export const informacionCategorias = async (req, res)=> {
    try {
      const categorias = await client.db("test").collection("categorias").find().toArray();
        res.json(categorias);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

