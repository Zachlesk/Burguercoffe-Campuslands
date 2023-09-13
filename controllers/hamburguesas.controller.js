import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export const hamburguesaVegetariana = async (req, res)=> {
    try {
      const vegan = await client.db("test").collection("hamburguesas").find( { categoria: "Vegetariana" } ).toArray();
        res.json(vegan);
    } catch (error) {
      console.error('Error al buscar hamburguesas veganas:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

export const chefsBurguers = async (req, res)=> {
    try {
      const hamburguesas = await client.db("test").collection("hamburguesas").find( { chef: "ChefB" } ).toArray();
        res.json(hamburguesas);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

export const nuevoIngrediente = async (req, res)=> {
    try {
      const { nuevoIngrediente } = req.body;
      const resultado = await client.db("test").collection("hamburguesas").updateMany({ categoria: 'Clásica' }, { $push: { ingredientes: nuevoIngrediente } }).toArray();
      if (resultado.n === 0) {
        res.status(404).json({ error: 'No se encontraron hamburguesas clásicas' });
        return;
      }
      res.json({ mensaje: 'Ingrediente agregado a las hamburguesas clásicas' });
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }};

export const panIntegral = async (req, res)=> {
        try {
            const panIntegral = await client.db("test").collection("hamburguesas").find({ ingredientes: 'Pan integral' }).toArray();
            if (panIntegral.length === 0) {
              res.json({ mensaje: 'No se encontraron hamburguesas con "Pan integral" como ingrediente' });
            } else {
              res.json({ panIntegral });
            }
          } catch (error) {
            console.error('Error al buscar hamburguesas:', error);
            res.status(500).json({ error: 'Error en el servidor' });
          }
        };
