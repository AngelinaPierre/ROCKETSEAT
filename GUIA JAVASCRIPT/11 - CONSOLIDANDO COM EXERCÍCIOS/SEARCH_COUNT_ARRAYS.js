/*  ### BUSCANDO E CONTANDO DADOS EM ARRAYS

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Auguto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/


const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                author: "T.Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert t. Kiyosaki e Sharon L. Lechter"
            }
        ],
    },
    {
        category: "Inteligência Emocial",
        books:[
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    }
];

// Contar o número de categorias e o número de livros em cada categoria
const totalCategorys = booksByCategory.length

console.log(totalCategorys)

for(let category of booksByCategory){
    console.log("total de livros da categoria: ",category.category)
    console.log(category.books.length)
}


// * Contar o número de autores

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author) // so entra no if para add
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

// * Mostrar livros do autor Auguto Cury

function booksOfAugustusCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === "Augusto Cury"){
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}
booksOfAugustusCury();

//Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(" |->| ")}`)
}
booksOfAuthor('George S. Clason')
