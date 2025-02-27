const { Usuario } = require("../models");

class UsuarioServices {
    static async listarUsuarios() {
        try {
            return await Usuario.findAll();
        } catch (error) {
            console.error("Error al atraer el usuario:", error);
           
        }
    }

    static async crearUsuario(nombre, correo, contrasena) {
        try {
            return await Usuario.create({ nombre, correo, contrasena });
        } catch (error) {
            console.error("Error crear ususario");
            
        }
    }
    
    static async actualizarUsuario(id, nombre, correo, contrasena) {
        try {
            return await Usuario.update({ nombre, correo, contrasena }, { where: { id } });
        } catch (error) {
            console.error("Error al actualizar:");
            
        }
    }
    
    static async eliminarUsuario(id) {
        try {
            return await Usuario.destroy({ where: { id } });
            
        } catch (error) {
            console.error("Error al eliminar usuario:");
           
        }
    }
    static async buscarPorCorreo(correo) {
        try {
            return await Usuario.findOne({ where: { correo } });
        } catch (error) {
            console.error("Error al buscar por correo:");
        }
    }
}

module.exports = UsuarioServices;
