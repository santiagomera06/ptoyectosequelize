const UsuarioServices = require('../services/usuarioServer');
class UsuarioCOntroller{
    static async listarUsuarios(req, res){
        try{
           let lista = await UsuarioServices.listarUsuarios();
           res.json(lista);
        }catch(e){
            res.json({error:"error en al peticion "});
        }
}
static async crearUsuario(req, res){
    try{
        let {nombre,correo,contrasena} = req.body;
        let nuevo = await UsuarioServices.crearUsuario(nombre,correo,contrasena);
        res.json(nuevo);
    }catch(e){
        res.json({error:"error en al peticion "});
    }
}

static async actualizarUsuario(req, res){
    try{
        let {id} = req.params;
        let {nombre,correo,contrasena} = req.body;
        let actualizar = await UsuarioServices.actualizarUsuario(id,nombre,correo,contrasena);
        res.json(actualizar);
    }catch(e){
        res.json({error:"error en al peticion "});
    }
}

static async eliminarUsuario(req, res){
    try{
        let {id} = req.params;
        let eliminar = await UsuarioServices.eliminarUsuario(id);
        res.json(eliminar);
    }catch(e){
        res.json({error:"error en al peticion "});
    }
}

static async buscarPorCorreo(req, res){
    try{
        let {correo} = req.params;
        let buscar = await UsuarioServices.buscarPorCorreo(correo);
        res.json(buscar);
    }catch(e){
        res.json("error en al peticion ");
    }
}
}
module.exports = UsuarioCOntroller;