const UserService = require("../../app/services/userServices")

describe("Pruebas para userServices",()=>{
    test("Prueba clase UserService",()=>{
        const service = UserService.create(1,"@AlexxisG","Alexis")
        expect(service.id).toBe(1)
        expect(service.username).toBe("@AlexxisG")
        expect(service.name).toBe("Alexis")
        expect(service.bio).not.toBeUndefined()

    });
    test("Prueba para el metodo getInfo",()=>{
        const usuario  = UserService.create(1,"@AlexxisG","Alexis")
        const userInstancia  = UserService.getInfo(usuario)
        expect(userInstancia[0]).toBe(1)
        expect(userInstancia[1]).toBe("@AlexxisG")
        expect(userInstancia[2]).toBe("Alexis")
        expect(userInstancia[3]).toBe("Sin bio")
    });
    test("Prueba para el metodo UpdateUserName",()=>{
        const usuarioUpd = UserService.create(1,"@AlexxisG","Alexis")
        const UserUpd = UserService.updateUserUsername(usuarioUpd,"Jose")
        expect(UserUpd).toBe("Jose")

    });
    test("Pruea para users all",()=> {
        const item1  = UserService.create(1,"@AlexxisG","Alexis")
        const item2  = UserService.create(2,"@Jose","Jose")
        const usernames = UserService.getAllUsernames([item1,item2])
        expect(usernames).toContain("@AlexxisG")
        expect(usernames).toContain("@Jose")
    });

})