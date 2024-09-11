const express = require('express');
const router = express.Router();
const ProductLLVGController = require('../controllers/ProductController'); // Asegúrate de que la ruta sea correcta

// Definir las rutas
router.get('/', ProductLLVGController.getAllProducts); // Asegúrate de que getAllProducts esté definido en el controlador
router.get('/:id', ProductLLVGController.getProductById); // Asegúrate de que getProductById esté definido en el controlador
router.post('/', ProductLLVGController.createProduct); // Asegúrate de que createProduct esté definido en el controlador
router.put('/:id', ProductLLVGController.updateProduct); // Asegúrate de que updateProduct esté definido en el controlador
router.delete('/:id', ProductLLVGController.deleteProduct); // Asegúrate de que deleteProduct esté definido en el controlador

module.exports = router;