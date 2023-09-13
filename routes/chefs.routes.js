import express from "express";
import { chefsEspecialidad, chefCocinaInternacional, chefDataBase, chefAsiatico, noChefA, noVegetariano} from "../controllers/chefs.controller.js";

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

  router.get("/less", async (req, res) => {
    try {
      const chefs = await noChefA();
      res.json(chefs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.delete("/vegetariano", async (req, res) => {
    try {
      const chefs = await noVegetariano();
      res.json(chefs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  

export default router;
