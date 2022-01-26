// Váriaveis, são um espaço na memória para guardar algum valor

let peso_peca = 101

// pesoPeca - Camel Case 
// peso_peca - Snake Case
// PesoPeca - Pascal Case

let numero_pecas = 9

if(peso_peca > 100){
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!!")

    if(numero_pecas < 10){
        console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
    }else {
        console.log("Caixa Completa")
    }
    
}else {
    console.log("Peso insuficiente, não é possível cadastrar.")
}

let nomePeca = 'Disco de Freio'

// ASCII Table

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possivel cadastrar")
}else{
    console.log("Nome de peça adequado, podemos cadastrar")
}