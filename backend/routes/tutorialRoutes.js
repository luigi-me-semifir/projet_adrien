const express = require("express");
const router = express.Router();
const Tutorial = require("../models/Tutorial");

// CRUD routes
router.get("/", async (req, res) => {
  const tutorials = await Tutorial.find();
  res.json(tutorials);
});

// Crée un nouveau tutoriel
router.post("/", async (req, res) => {
  try {
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false,
    });
    const newTutorial = await tutorial.save();
    res.status(201).json(newTutorial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Met à jour un tutoriel
router.put("/:id", async (req, res) => {
  try {
    const updatedTutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTutorial) return res.status(404).json({ message: "Tutoriel introuvable" });
    res.json(updatedTutorial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supprime un tutoriel
router.delete("/:id", async (req, res) => {
  try {
    const deletedTutorial = await Tutorial.findByIdAndDelete(req.params.id);
    if (!deletedTutorial) return res.status(404).json({ message: "Tutoriel introuvable" });
    res.json({ message: "Tutoriel supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Recherche de tutoriels par titre
router.get("/search", async (req, res) => {
  const { q } = req.query; // Query string: ?q=mot-cle
  try {
    const tutorials = await Tutorial.find({
      title: { $regex: q, $options: "i" } // Recherche insensible à la casse
    });
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) return res.status(404).json({ message: "Tutoriel introuvable" });
    res.json(tutorial);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
