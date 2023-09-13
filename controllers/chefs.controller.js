import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export const chefsEspecialidad = async (req, res)=> {
    try {
      const carnes = await client.db("test").collection("chefs").find( { especialidad: "Carnes" } ).toArray();
          res.json(carnes);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

export const chefCocinaInternacional = async (req, res)=> {
    try {
        const resultado = await client.db("test").collection("chefs").findOneAndUpdate({ nombre: 'ChefC' }, { especialidad: 'Cocina Internacional' }, { new: true });
    
        if (!resultado) {
          res.json({ mensaje: 'ChefC no encontrado' });
        } else {
          res.json({ mensaje: 'Si jalo' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      }
    };