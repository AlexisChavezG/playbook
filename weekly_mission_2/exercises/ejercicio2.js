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