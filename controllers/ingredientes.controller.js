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

  
export const ingredienteCaro = async (req, res)=> {
    try { 
    const resultado = await client.db("test").collection("ingredientes").aggregate([{ $sort: { precio: -1 } },{ $limit: 1 }, ]).toArray();
    
      if (resultado.length === 0) {
        console.log({ mensaje: 'No se encontraron ingredientes' });
      } else {
        console.log({ ingredienteCaro: resultado[0] });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
    };

export const stockPan = async (req, res) => {
        try {
          const resultado = await client.db("test").collection("ingredientes").updateOne({ nombre: "Pan" },{ $inc: { stock: 100 } } 
          );
      
          if (resultado.n === 0 ) {
            res.json({ mensaje: 'No existe' });
          } else {
            res.json({ mensaje: 'Si jala' });
          }
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Error en el servidor' });
        }
      };

  export const ingredienteClasico = async (req, res) => {
        try {
            const ingredientes = await client.db("test").collection("ingredientes").find({ descripcion: { $regex: "clásico" } });
          if (!ingredientes || ingredientes.length === 0) {
            return res.status(404).json({ mensaje: 'No hay clasicos en la desc' });
          }
          res.json(ingredientes);
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Error en el servidor' });
        }
      };
    
export const ingredientesPrecio = async (req, res)=>{
  try {
    const precio = await client.db('test').collection('ingredientes').find({precio: {$gte: 2, $lte:5}}).toArray();
    console.log(precio)
  } catch (error) {
    console.error('Error:', error);
          res.status(500).json({ error: 'Error en el servidor' });
  }
}

export const panDescripcion = async (req, res)=>{
  try {
    const precio = await client.db('test').collection('ingredientes').updateOne({ nombre: 'Pan' }, { $set: { descripcion: 'Pan fresco y crujiente' } });
    console.log(precio)
  } catch (error) {
    console.error('Error:', error);
          res.status(500).json({ error: 'Error en el servidor' });
  }
}

export const ordenAlfabetico = async (req, res)=>{
  try {
    const precio = await client.db('test').collection('ingredientes').find().sort( { nombre: 1 }).toArray();
    console.log(precio)
  } catch (error) {
    console.error('Error:', error);
          res.status(500).json({ error: 'Error en el servidor' });
  }
}