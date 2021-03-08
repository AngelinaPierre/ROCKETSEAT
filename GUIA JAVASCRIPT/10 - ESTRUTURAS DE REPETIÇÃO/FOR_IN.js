// ESTRUTURA DE REPETIÇÃO
// FOR IN

 let person = {
     name: 'john',
     age: 36,
     weight: 88.6
 }

 for (let property in person){
    //  console.log(property)
    //  console.log(person['name'])
    // console.log(person.name)
    console.log(person[property])
 }