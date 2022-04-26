const repo = {
 name: "LaunchX",
 author: "Alexis Chávez",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}
const issue= {
    title: "Correcciones",
    repositoryNameAssociated: "playbook",
    status: "Cambios",
    numberOfComments: 2,
    labels:5,
    author:"Alexis C",
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTitleAndAuthor: function(){
        return`El título es: ${this.title} and el autor es: ${this.author}`
    },
    getGeneralInfo: function(){
        return `El repositorio se llama ${this.repositoryNameAssociated} fue creado el ${this.dateCreated}`
    }
}
console.log(`La clase issue dice lo siguiente: `)
console.log(`El título y autor es `, issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const PullRequest = {
    title: "Cambios abril",
    branchName:"master",
    dateCreated:new Date(),
    status:"ESP",
    repositoryNameAssociated:"playbook",
    getStatus : function(){
        return `Estatus del pullRequest ${this.status}`
    },
    getTitleAndAutor: function(){
        return `El título es ${issue.title}, el autor es ${issue.author} `
    }
}
console.log(PullRequest.getStatus())