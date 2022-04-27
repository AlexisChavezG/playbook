const user = require("../../app/models/user.js")
describe("Pruebas para twitter",() =>{
    test("1. Verifica clase user",() =>{
        const user1  = new user(1,"@Alexis","Alexis Chavez","bio","datecreate","lastUpdate")
        expect(user1.id).toBe(1)
        expect(user1.username).toBe("@Alexis")
        expect(user1.name).toBe("Alexis Chavez")
        expect(user1.bio).toBe("bio")
        expect(user1.dateCreated).not.toBeUndefined()
        expect(user1.lastUpdated).not.toBeUndefined()
    });
    test("2. Verificiar getters",() =>{
        const user2  = new user(2,"@Alexis","Alexis Chavez","bio","datecreate","lastUpdate")
        expect(user2.getbio).toBe("bio")
        expect(user2.getusername).toBe("@Alexis")
        expect(user2.getdateCreated).not.toBeUndefined()
        expect(user2.getlastUpdated).not.toBeUndefined()
    });
    test("3. Veritifcar setters",()=>{
        const user3  = new user(2,"@Alexis","Alexis Chavez","bio","datecreate","lastUpdate")
        user3.setbio ="bio2"
        expect(user3.bio).toBe("bio2")
        user3.setusername = "@Alex"
        expect(user3.username).toBe("@Alex")
    });

})