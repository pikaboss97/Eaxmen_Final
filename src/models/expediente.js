const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expdSchema = new Schema({
    nombre: String,
    grado: String,
    articulos: Number,
    libros: Number,
    proyectos: Number,
    asesorado: Number,
    
});

module.exports = mongoose.model('expedientes', expdSchema);