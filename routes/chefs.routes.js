import express from "express";
import { chefsEspecialidad, chefCocinaInternacional, chefDataBase, chefAsiatico } from "../controllers/chefs.controller.js";

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

  router.get("/all", async (req, res) => {
    try {
      const chefs = await chefDataBase();
      res.json(chefs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/asiatico", async (req, res) => {
    try {
      const chefs = await chefAsiatico();
      res.json(chefs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

export default router;
