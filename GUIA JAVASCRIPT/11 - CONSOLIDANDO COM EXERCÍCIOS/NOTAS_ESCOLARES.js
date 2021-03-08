/*  ### TRANSFORMAR NOTAS ESCOLARES

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima   - A
    * entre 80 e 89     - B
    * entre 70 e 79     - C
    * entre 60 e 69     - D
    * menor que 60      - F
*/

let score = 65

function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score>= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score <60 && score >=0

    let scoreFinal;

    if(scoreA){
        scoreFinal = 'A'
    }else if(scoreB){
        scoreFinal = 'B'
    }else if(scoreC){
        scoreFinal = 'C'
    }else if(scoreD){
        scoreFinal = 'D'
    }else if(scoreF){
        scoreFinal = 'F'
    }else{
        scoreFinal = 'Nota invalida'
    }

    return scoreFinal
}

// validações para ver se a logica faz sentido.
console.log(getScore(101)) // invalida
console.log(getScore(-1)) // invalida
console.log(getScore(0)) // f
console.log(getScore(1))// f
console.log(getScore(45))// f
console.log(getScore(60)) // d
console.log(getScore(61))// d
console.log(getScore(75)) // c
console.log(getScore(85))// b
console.log(getScore(95))// a