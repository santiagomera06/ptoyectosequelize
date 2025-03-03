const {Roles}=require('../models/');
const {Usuario}=require('../models/');

class ROlesservice{
    static async listarUsuarioRoles(){
        try {
            return await Roles.findAll();
        } catch (error) {
            console.error("Error al atraer el usuario:", error);
        }
    }
}