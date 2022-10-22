// Permitir o cadastro da peça somente se ela pesar mais de 100g.
// Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem lista de 
// peças está lotada.
// Validar se o nome da peça possui mais de 3 caracteres.
  

let peso = 100

if (peso < 100) {

console.log ("A peça deve ter no mínimo 100g")

}else{

console.log ("A peça possui tamanho adequado")

}

var listadePeca= ["Filtro de ar", "Amortecedor", "Disco de Freio"]

//existe espaço na lista?
if (listadePeca.lenght < 10) {
// é possível cadastrar
console.log ("É possível cadastrar mais peças")
 } else {
 // Não é possível cadastrar
 console.log ("Não é possível cadastrar mais peças")
 }

let nomePeca = "Caixa de Cambio"

if (nomePeca.lenght > 3){

console.log ("O nome da peça está adequado")

}else{

console.log ("O nome da peça precisa ter mais de 3 caracteres, digite um nome adequado")

}