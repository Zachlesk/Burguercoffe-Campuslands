import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export const ingredientes400 = async (req, res) =>{
    try {
        const result = await client.db("test").collection("ingredientes").find({ stock: { $lt: 400}}).toArray();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const aumentarPrecioIngredientes = async (req, res) => {
    try {
      const ingredientes = await client.db("test").collection("ingredientes").updateMany({}, { $mul: { precio: 1.5 } });
     res.json({ mensaje: 'Precios de ingredientes actualizados con éxito' });
    } catch (error) {
      console.error('Error al actualizar los precios de ingredientes:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

export const ingredientesZero = async (req, res)=> {
    try {
      const stockZero = await client.db("test").collection("ingredientes").deleteMany( {stock: 0});
          res.json(stockZero);
          if (stockZero.n === 0) {
            res.json({ mensaje: 'No hay ingredientes con stock 0 para eliminar' });
          } else {
            res.json({ mensaje: `Se eliminaron ${stockZero.n} ingredientes con stock igual a 0` });
          }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };
