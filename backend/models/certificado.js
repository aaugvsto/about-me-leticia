const mongoose = require('mongoose');

const Certificado = mongoose.model('Certificado', {
    nome: String,
    link: String
});

module.exports = Certificado;