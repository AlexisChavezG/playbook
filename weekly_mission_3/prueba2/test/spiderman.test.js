var spiderman = require("../app/spiderman")
describe("Unit Test for spiderman class", () => {
    test('Prueba número 1', () => {
      const resultOfSomething = new spiderman("Spiderman Sony",31,"Andre Garfield",2,"Sony")
      expect(resultOfSomething.nombre).toBe("Spiderman Sony");
      expect(resultOfSomething.edad).toBe(31);
      expect(resultOfSomething.actor).toBe("Andre Garfield");
      expect(resultOfSomething.numPelis).toBe(2);
      expect(resultOfSomething.estudioCine).toBe("Sony");
      

    });
    test('Prueba número 2',()=>{
        const tomHolland = new spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })