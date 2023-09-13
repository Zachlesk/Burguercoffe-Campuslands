import express from "express";
import { hamburguesaVegetariana, chefsBurguers, nuevoIngrediente, panIntegral } from "../controllers/hamburguesas.controller.js";

const router = express.Router();

router.get("/vegetariana", async (req, res) => {
  try {
    const hamburguesas = await hamburguesaVegetariana();
    res.json(hamburguesas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/chefB", async (req, res) => {
    try {
      const hamburguesas = await chefsBurguers();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post("/ingrediente", async (req, res) => {
    try {
      const hamburguesas = await nuevoIngrediente();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/integral", async (req, res) => {
    try {
      const hamburguesas = await panIntegral();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
export default router;
