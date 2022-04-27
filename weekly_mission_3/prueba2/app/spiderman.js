class Spiderman{
    constructor(nombre, edad, actor, numPelis, estudioCine){
        this.nombre  = nombre
        this.edad = edad
        this.actor = actor
        this.numPelis = numPelis
        this.estudioCine   = estudioCine

    }
    getInfo(){
        return `Hey, I'm ${this.nombre} from ${this.estudioCine} studio`
    }
}
module.exports = Spiderman