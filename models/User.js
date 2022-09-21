const { Model, DataTypes } = require('sequelize');

class User extends Model {
    
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            sequelize
        })
    }

        
}


module.exports = User;

