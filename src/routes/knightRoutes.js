const express = require('express');
const router = express.Router();
const knightController = require('../controllers/knightController');

router.get('/', knightController.getAllKnights);

router.post('/', knightController.createKnight);

router.get('/:id', knightController.getKnightById);

router.put('/:id', knightController.updateKnight);

router.delete('/:id', knightController.deleteKnight);

module.exports = router;
