const RolController = require('../services/rolService');

class RolController {
    static async listarRoles(req, res) {
        try {
            let roles = await RolController.listarUsuarioRoles();
            res.json(roles);
        } catch (error) {
            res.json({ error: "error en al peticion " });
        }
    }
    
    static async crearRol(req, res) {
        try {
            let {rol} = req.body;
            let nuevo = await RolController.crearRol(rol);
            res.json(nuevo);
        } catch (error) {
            res.json({ error: "error en al peticion " });
        }
    }
    
    static async eliminarRol(req, res) {
        try {
            let {id} = req.params;
            let eliminar = await RolController.eliminarRol(id);
            res.json(eliminar);
        } catch (error) {
            res.json({ error: "error en al peticion " });
        }
    }
    
    static async actualizarRol(req, res) {
        try {
            let {id} = req.params;
            let {rol} = req.body;
            let actualizar = await RolController.actualizarRol(id,rol);
            res.json(actualizar);
        } catch (error) {
            res.json({ error: "error en al peticion " });
        }
    }
}