// Manipulando Strings e Números e ARRAY

let techs = ["html","css","js"]


// Adicionar um item no fim
techs.push("nodejs");
// Adicionar no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()

// pegar somente alguns elementos do array (css e js)
// console.log(techs.slice(1,3))

// remover 1 ou mais items em qualquer posiçao do array
// techs.splice(1,3)
// encontrar a posição de um elemento no array.
let index = techs.indexOf('css')
techs.splice(index,2)


console.log(index)

console.log(techs)










// Transformar uma cadeia de caracteres em elementos de um array
// let word = "manipulação"
// console.log(Array.from(word))

// Contar elementos de um array
// console.log([
//     'a',
//     'b',
//     'c',
// ].length)

// Criar Array com construtor
// let myArray = new Array('a','b','c')
// console.log(myArray)

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore.toLowerCase());

// Verificar se o texto contém a palavra amor
// let phrase = "Eu quero viver o Amor!"
// console.log(phrase.includes("Amor"));

// MINÚSCULA PARA MAIÚSCULA E VICE-VERSA
// let word = "Progamar é muito bacana!"
// console.log(word.toUpperCase())
// console.log(word.toLowerCase().toUpperCase());

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.
// let number = 43512345.35985462
// console.log(number.toFixed(2).replace(".",","))

// quantidade de caracteres
// let word = "Paralelepipedo"
// console.log(word.length);

// quantidae de caracteres
// let number = 1234
// console.log(String(number).length)

//tranformação string number
// let string = '123'
// console.log(Number(string));

//transformação number string
// let number = "321"
// console.log(String(number));