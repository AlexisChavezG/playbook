 class Pokemon{
    constructor (name){
        this.name = name;
    }

    sayHello(){
        //Mi pokemon pikachu te saluda!!!
        console.log(`Mi pokemon ${this.name} te saluda`)

    }
    sayMessage(mensaje){
        //Mi pokemon pikachu dice: Heey!
        console.log(`Mi pokemon ${this.name} dice: ${mensaje} `)
    }
}
module.exports  = Pokemon