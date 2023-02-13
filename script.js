// ----- Primeira Parte -----------------------------------------------------------------------------
alert("Olá, tudo bem?")

const numberOne = prompt("Preciso que você escolha e digite dois números. Número 1:")
const numberTwo = prompt("Agora, o número 2, por favor:")

const sum = (Number(numberOne) + Number(numberTwo))
alert(`A soma dos dois números é: ${sum}`)

const sub = (Number(numberOne) - Number(numberTwo))
alert(`A subtração ${numberOne} menos ${numberTwo} é: ${sub}`)

const multi = (Number(numberOne) * Number(numberTwo))
alert(`A multiplicação dos dois números é: ${multi.toFixed(2)}`)

const div = (Number(numberOne) / Number(numberTwo))
alert(`A divisão de ${numberOne} por ${numberTwo} é: ${div.toFixed(2)}`)

const remainder = (Number(numberOne) % Number(numberTwo))
alert(`O resto da divisão de ${numberOne} por ${numberTwo} é: ${remainder.toFixed(2)}`)

// ----- Segunda Parte (1) -----------------------------------------------------------------------------

//Quando qualquer número PAR/even é dividido pôr 2, o resto é 0
if((sum % 2) == 0) {
  alert("A soma dos números é par")
} else {
  alert("A soma dos números é ímpar")
}

// ----- Segunda Parte (2) -----------------------------------------------------------------------------
const equalityCheck = (numberOne == numberTwo) ? "Os números são iguais" : "Os números são diferentes"
alert(equalityCheck)
