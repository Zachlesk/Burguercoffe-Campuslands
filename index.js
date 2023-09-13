import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./db.js"; 
import ingredientesRoutes from "./routes/ingredientes.routes.js"; 
import hamburguesasRoutes from "./routes/hamburguesas.routes.js"; 
import chefsRoutes from "./routes/chefs.routes.js"; 
import categoriasRoutes from "./routes/categorias.routes.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/ingredientes", ingredientesRoutes);
app.use("/hamburguesas", hamburguesasRoutes);
app.use("/chefs", chefsRoutes);
app.use("/categorias", categoriasRoutes);

conexionMongo()

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });


