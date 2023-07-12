const mongoose = require('mongoose');

async function init() {
    mongoose.connect("mongodb+srv://adminlet:adminlet@cluster0.1ekvmu2.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log('Database connected!')
            return true;
        })
        .catch((err) => {
            console.log(err)
            return false;
        })
}

module.exports = init;