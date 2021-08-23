const express = require('express');
const controller = require('../controllers/satellite');
const router = express.Router();
const path = 'satellite'

/**
 * Ruta: /user
 * Metodo: GET
 */
router.get('/'+path, controller.getData);

/**
 * Ruta: /user
 * Metodo: POST
 */
router.post('/'+path, controller.insertData);

/**
 * Ruta: /user
 * Metodo: PUT
 */
router.put('/'+path, controller.updateData);

/**
 * Ruta: /user
 * Metodo: DELETE
 */
router.delete('/'+path, controller.removeData);

module.exports = router;
