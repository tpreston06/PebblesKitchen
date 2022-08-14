const mongoose = require('mongoose')

const pebblesSchema = new mongoose.Schema({
    category: { type: String, required: true},
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: String, required: true },
    price: { type: String, required: true },
});

const pebbles = mongoose.model('pebbles', pebblesSchema);

module.exports = pebbles;
