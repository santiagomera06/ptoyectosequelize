const express = require('express');
const router = express.Router();
const RolController = require('../controller/rolController');

router.get('/rol', RolController.listarRoles);
module.exports = router;
router.post('/rol', RolController.crearRol);

router.put('/rol/:id', RolController.actualizarRol);

router.delete('/rol/:id', RolController.eliminarRol);   
 
