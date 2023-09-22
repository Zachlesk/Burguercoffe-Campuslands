import express from "express";
import { hamburguesaVegetariana, chefsBurguers, nuevoIngrediente, panIntegral, quesoCheddar, hamburguesasNueve, menositocinco, ordenAscendente, tomatelettuce, incrementarGourmet, hamburguesaCaro, pepinillos, sieteIngredientes, caraGourmet, ingredientesHamburguesas, chefsHamburguesa, categoriaHamburguesaMayor, costoTotalChefs, ingredientesNaN, descripcionHamburguesa, chefHamburguesaIngredientes, precioPromedioHamburguesa, chefsHamburguesaCara } from "../controllers/hamburguesas.controller.js";

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

  router.get("/cheddar", async (req, res) => {
    try {
      const hamburguesas = await quesoCheddar();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/precio", async (req, res) => {
    try {
      const hamburguesas = await hamburguesasNueve();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.delete("/cinco", async (req, res) => {
    try {
      const hamburguesas = await menositocinco();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/ascendente", async (req, res) => {
    try {
      const hamburguesas = await ordenAscendente();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/tomates", async (req, res) => {
    try {
      const hamburguesas = await tomatelettuce();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/gourmet", async (req, res) => {
    try {
      const hamburguesas = await incrementarGourmet();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/caro", async (req, res) => {
    try {
      const hamburguesas = await hamburguesaCaro();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/pepinillos", async (req, res) => {
    try {
      const hamburguesas = await pepinillos();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/siete", async (req, res) => {
    try {
      const hamburguesas = await sieteIngredientes();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/gourmetCaro", async (req, res) => {
    try {
      const hamburguesas = await caraGourmet();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/ingredientesHamburguesas", async (req, res) => {
    try {
      const hamburguesas = await ingredientesHamburguesas();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/chefsHamburguesa", async (req, res) => {
    try {
      const hamburguesas = await chefsHamburguesa();
      res.json(hamburguesas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/categoriaHamburguesaMayor", async (req, res)=>{
    try {
      const hamburguesas = await categoriaHamburguesaMayor();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.get("/costoTotalChefs", async (req, res)=>{
    try {
      const hamburguesas = await costoTotalChefs();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.get("/ingredientesNaN", async (req, res)=>{
    try {
      const hamburguesas = await ingredientesNaN();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.get("/descripcionHamburguesa", async (req, res)=>{
    try {
      const hamburguesas = await descripcionHamburguesa();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.get("/chefHamburguesaIngredientes", async (req, res)=>{
    try {
      const hamburguesas = await chefHamburguesaIngredientes();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.get("/precioPromedioHamburguesa", async (req, res)=>{
    try {
      const hamburguesas = await precioPromedioHamburguesa();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.get("/chefsHamburguesaCara", async (req, res)=>{
    try {
      const hamburguesas = await chefsHamburguesaCara();
      res.json(hamburguesas)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

export default router;
