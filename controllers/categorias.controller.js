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

export const gourmetCategorias = async (req, res) => {
    try {
        const gourmesito = await Cclient.db("test").collection("categorias").find({ descripcion: { $regex: "gourmet"}})
            if (!gourmesito || gourmesito.length === 0) {
        return res.status(404).json({message: 'No hay gourmé en la descripcion sisas'})
    }
    res.json(gourmesito)
    }
    catch (error){
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
}