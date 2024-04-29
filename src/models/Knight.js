const mongoose = require('mongoose');

const knightSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    birthday: { type: Number, required: true },
    weapons: [{
        name: { type: String, required: true },
        mod: { type: Number, required: true },
        attr: { type: String, required: true },
        equipped: { type: Boolean, required: true }
    }],
    attributes: {
        strength: { type: Number, required: true },
        dexterity: { type: Number, required: true },
        constitution: { type: Number, required: true },
        intelligence: { type: Number, required: true },
        wisdom: { type: Number, required: true },
        charisma: { type: Number, required: true }
    },
    keyAttribute: { type: String, required: true }
});

const Knight = mongoose.model('Knight', knightSchema);

module.exports = Knight;
