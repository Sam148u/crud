const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// GET: Obtener todos los elementos
router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener los elementos" });
    }
});

// POST: Crear un nuevo elemento
router.post("/", async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: "Error al crear el elemento", details: err.message });
    }
});

// PUT: Actualizar un elemento existente
router.put("/:id", async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: "Error al actualizar el elemento", details: err.message });
    }
});

// DELETE: Eliminar un elemento
router.delete("/:id", async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Elemento eliminado" });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar el elemento" });
    }
});

module.exports = router;