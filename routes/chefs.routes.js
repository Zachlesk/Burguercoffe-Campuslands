import express from "express";
import { chefsEspecialidad, chefCocinaInternacional } from "../controllers/chefs.controller.js";

const router = express.Router();

router.get("/especialidad", async (req, res) => {
  try {
    const chefs = await chefsEspecialidad();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/internacional", async (req, res) => {
    try {
      const chefs = await chefCocinaInternacional();
      res.json(chefs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

export default router;
