const user ={
    user : "@AlexisChavezG",
    name : "Alexis Chavez",
    description: "",
    dateAdd : new Date(),
    numberDM :"1",
    followersNumbers:"23",
    followingNumbers:"100",
    firstFollow : function(){
        return "@twitter"
    },
    firstFollowing : function(){
        return "@AlexisChavez"
    }

}
const trending_topic ={
    firstPosition : "Elon Musk",
    secondPosition: "#VoySinTwitter",
    firstPositionSport : function(){
        return "Champions League"
    },
    firstPositionNews : function(){
        return "#RedAMLO"
    },
    
}
const hashtag = {
    popular : "#twitter",
    morePopular : function(){
        "WeLoveYouSiwon"
    }
}
console.log(user.name, user.followersNumbers())
console.log(trending_topic.firstPosition, trending_topic.firstPositionSport())