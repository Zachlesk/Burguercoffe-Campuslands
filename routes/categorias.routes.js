import express from "express";
import { informacionCategorias, gourmetCategorias } from "../controllers/categorias.controller.js";

const router = express.Router();
router.use(express.json());

router.get("/informacion", async (req, res) => {
  try {
    const chefs = await informacionCategorias();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/gourmet", async (req, res) => {
    try {
      const chefs = await gourmetCategorias();
      res.json(chefs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });   

export default router;
