const mongoose = require('mongoose');

//define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: {type: String, requried: true, index: true },
    length: { type: String, required: true, index: true },
    start: {type: String, requried: true },
    resort: { type: String, required: true },
    perPerson: {type: String, requried: true },
    image: { type: String, required: true },
    description: {type: String, requried: true }
});
mongoose.model('trips', tripSchema);