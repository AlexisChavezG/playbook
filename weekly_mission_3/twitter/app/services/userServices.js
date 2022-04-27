const User = require("./../models/user")
class UserServices{
    static create(id, username, name){
        return new User(id, username,name,"Sin bio")
    }
    static getInfo(usuario){
        return Object.values(usuario)
    }
    static updateUserUsername(user, username){
        return user.username = username
    }
    static getAllUsernames(users){
        const UsuariosList = users.map(users =>users.username)
        return UsuariosList
    }
}
module.exports  = UserServices