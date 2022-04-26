const profile = {
    userName : "Alexis_Chavez",
    fistName : "Alexis",
    lastName : "Chávez",
    location : "Puebla,Mx",
    methoCash : "TDC",

}
const travel = {
    start : "",
    end : "",
    getPosition : function(){
        return "localtion"
    }

}
console.log(profile.fistName, travel.getPosition())