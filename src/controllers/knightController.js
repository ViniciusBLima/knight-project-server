const Knight = require('../models/Knight');
const Hero = require('../models/Hero')

exports.getAllKnights = async (req, res) => {
    try {
        console.log(req.query)
        if (req.query.filter === 'heroes') {
            const heroes = await Hero.find();
            res.status(200).json(heroes);
        } else {
            const knights = await Knight.find();
            res.status(200).json(knights);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createKnight = async (req, res) => {
    const knight = new Knight(req.body);
    try {
        const savedKnight = await knight.save();
        res.status(201).json(savedKnight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getKnightById = async (req, res) => {
    try {
        const knight = await Knight.findById(req.params.id);
        if (!knight) return res.status(404).json({ message: "Knight not found" });
        res.status(200).json(knight);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateKnight = async (req, res) => {
    try {
        const knight = await Knight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!knight) return res.status(404).json({ message: "Knight not found" });
        res.status(200).json(knight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteKnight = async (req, res) => {
    try {
        const knight = await Knight.findById(req.params.id);
        if (!knight) return res.status(404).json({ message: "Knight not found" });

        const hero = new Hero({
            ...knight.toObject()
        });

        await hero.save();
        await Knight.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Knight deleted and hero created", hero });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
