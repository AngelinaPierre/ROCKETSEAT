// Function scope

let subject

function createThink(){
    subject = 'study';
    // return subject;
}
console.log(subject);// não inicializada logo undefined.
// console.log(createThink()); // chama a função alterando o valor
createThink(); // chama a função alterando o valor

console.log(subject); //subject att fora do escopo

