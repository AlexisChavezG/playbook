const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//Get name 
explorers.forEach(element => {
    console.log(element.name)
});
//get stack
explorers.forEach(element=>{
    console.log(element.stack)
});
//get whit map
const mapa = explorers.map(function(b){return b.stack})
console.log(`Hola soy el mapa ${mapa}`)
//filter
explorers.forEach(element => {
    const datafilter = element.stack.filter((info) =>info.includes('js'))
    console.log(datafilter)
});

//Buscar por cd con find
const find = explorers.find((info)=>info.city === "CDMX")
console.log(find);


//reduce
//Valor inicial //primer valor de la lista //indice
const sumatoria = explorers.reduce((info,element)=>info+element.exercises_completed,0)
console.log(sumatoria)


const someS  = explorers.some((b)=>b.missions.frontend.exercisesFinished ===true)
console.log("Explorer que tiene exerciesFinised en true",someS)

const onBorder = explorers.every((b)=> typeof b.missions.onboarding.isFinished ===Boolean)
console.log(onBorder)

