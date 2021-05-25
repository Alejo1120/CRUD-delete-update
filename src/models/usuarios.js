const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
    nombre: String,
    apellido: String,
    Telefono :String,
    comentario: String
});


// EXPORTAR LA COLECCION 
module.exports = mongoose.model ('usuarios', UserSchema);