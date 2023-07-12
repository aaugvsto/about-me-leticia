const init = require('./data/db')
const express = require('express');
const Certificado = require('./models/certificado')
const server = express();
const buildCors = require('./cors/cors')

const isInitDatabase = init();

if (isInitDatabase) server.listen(5002);

buildCors(server);

server.use(
    express.urlencoded({
        extended: true,
    }),
)

server.use(express.json())

server.get('/', (req, res) => {
    return res.json({
        version: '1.0.0',
        author: 'Augusto Assis'
    })
});

server.post('/certificado', async (req, res) => {

    const { nome, link } = req.body;

    if (!nome)
        res.status(404).json({ message: 'Nome do certificado é obrigatório' })

    if (!link)
        res.status(404).json({ message: 'Link para o certificado é obrigatório' })

    const certificado = { nome, link }

    try {
        await Certificado.create(certificado);
        res.status(201).json({ message: 'Certificado cadastrado com sucesso!' })
    }
    catch (error) {
        res.status(500).json({ error: error })
    }

});

server.get('/certificado', async (req, res) => {

    try {
        const certificados = await Certificado.find();
        res.status(200).json(certificados)
    }
    catch (error) {
        res.status(500).json({ error: error })
    }

});

server.get('api/certificados');

server.listen(3000, () => {
    console.log('Iniciado');
});