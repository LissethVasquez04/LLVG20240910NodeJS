const mongoose = require('mongoose');

// Configuración de la conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/DBLILI', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
    .then(() => console.log('Conectado a MongoDB!'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));