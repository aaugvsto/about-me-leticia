const mongoose = require('mongoose');

const Certificado = mongoose.model('Certificado', {
    nome: String,
    descricao: String,
    link: String
});

module.exports = Certificado;