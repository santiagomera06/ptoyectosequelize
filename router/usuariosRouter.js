const express = require("express");
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');


router.get('/usuario', UsuarioController.listarUsuarios);
module.exports = router;
router.post('/usuario', UsuarioController.crearUsuario);

router.put('/usuario/:id', UsuarioController.actualizarUsuario);

router.delete('/usuario/:id', UsuarioController.eliminarUsuario);

router.get('/usuario/:correo', UsuarioController.buscarPorCorreo);