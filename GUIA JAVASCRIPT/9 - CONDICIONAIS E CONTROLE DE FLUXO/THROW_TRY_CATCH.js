// THROW (LANÇAR)

function sayMyName(name = ''){
    if(name===''){
        throw "Nome é obrigatório"
    }
    console.log('depois do erro')
    console.log(name)
}

// TRY(TENTAR )... CATCH (PEGAR)
try{
    sayMyName('Angelina')
}catch(e){
    console.log(e)
}
console.log("apos a função de erro")








