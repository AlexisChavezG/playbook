class Repo{
    constructor(name, author, lenguaje, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name  =name;
        this.author = author;
        this.lenguaje = lenguaje;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;


    }
    getTotalIssues(){
        return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}