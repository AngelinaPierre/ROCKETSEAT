// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?

// console.log(typeof weight); // undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * weight: Number (float)
        * isSubscribed: Boolean
*/
let name = 'Angelina';
let age = 25;
let stars = 4.8;
let isSubscribed = true;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof stars);
// console.log(typeof isSubscribed);
/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostra no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
    name:'Angelina',
    age: 25,
    weight:54.8,
    isSubscribed: true,
    weight: 52,
}; // objeto

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students = [

];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [
    student,
];

// console.log(students);

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
// console.log(students[0])
/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
    name: "John",
    age: 23,
    weight:74.8,
    isSubscribed: true,
}
//forma 1
// students = [
//     student,
//     john,
// ]
//forma 2
students[1]=john;

// console.log(students[1])

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1;
*/

// var é uma variavel global, logo irá dar um undifined.

console.log(a)
var a = 1;

