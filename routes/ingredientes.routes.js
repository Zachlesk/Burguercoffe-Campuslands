import express from "express";
import { ingredientes400, aumentarPrecioIngredientes, ingredientesZero, ingredienteCaro, stockPan, ingredienteClasico } from "../controllers/ingredientes.controller.js";

const router = express.Router();

router.get("/stock", async (req, res) => {
  try {
    const ingredients = await ingredientes400();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/aumentar", async (req, res) => {
  try {
    const ingredients = await aumentarPrecioIngredientes();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/nostock", async (req, res) => {
  try {
    const ingredients = await ingredientesZero();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/caro", async (req, res) => {
  try {
    const ingredients = await ingredienteCaro();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/bread", async (req, res) => {
  try {
    const ingredients = await stockPan();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/clasico", async (req, res) => {
  try {
    const ingredients = await ingredienteClasico();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
