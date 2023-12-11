//Ex1
const botao = document.getElementById("botao");
botao.addEventListener("click",Clicar);
function Clicar(){
    alert("“A button has been clicked!")
}
//--------------------------------------------------
//Ex2
setTimeout(function() {
    console.log("5 seconds passed by!");
  }, 5000);
//--------------------------------------------------
//Ex3
function Hora(){
    const data= new Date();
    const horas = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(horas);
}
setInterval(Hora,2000);
//--------------------------------------------------
//Ex4
function Data(){
    const data= new Date();
    const mes = parseInt(data.getUTCMonth()) + 1
    const dataAtual = data.getUTCDate() + ":" + mes + ":" + data.getFullYear();
    console.log(dataAtual);
}
setInterval(Data,2000);
//--------------------------------------------------
//Ex5
const largura = document.getElementById("largura");
largura.addEventListener("click",Largura);
function Largura(){
    const larguraTela  = window.screen.width;
    console.log(larguraTela);
}
//--------------------------------------------------
//Ex6
const altura = document.getElementById("altura");
altura.addEventListener("click",Altura);
function Altura(){
    const alturaTela  = window.screen.height;
    console.log(alturaTela);
}
//--------------------------------------------------
//Ex7
function readUserInput() {
    let numero1 = prompt("Insira o Primeiro Número");
    let operacao, numero2;

    if (!isNaN(numero1)) {
        operacao = prompt("+, -, * ou /");

        if (operacao == "+" || operacao == "-" || operacao == "*" || operacao == "/") {
            numero2 = prompt("Insira o Segundo Número");

            if (isNaN(numero2)) {
                alert("Número Inválido");
            }
        } else {
            alert("Operador Inválido");
        }
    } else {
        alert("Número Inválido");
    }

    return { numero1, numero2, operacao };
}

function realizarOperacoes(operacao, numero1, numero2) {
    let resultado = eval(numero1 + operacao + numero2);
    let resultadoFinal = parseFloat(resultado.toFixed(2));
    alert(resultadoFinal);
    return resultadoFinal;
}

function main() {
    let userInput = readUserInput();
    realizarOperacoes(userInput.operacao, userInput.numero1, userInput.numero2);
}

main();









  