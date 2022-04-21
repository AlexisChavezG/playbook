export default class Pokemon{
    constructor(name){
        this.name = name
    }
    sayHello(){
        console.log("Hola el pokemon es: "+this.name);
    }
}