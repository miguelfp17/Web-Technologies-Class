//Ex1
const ex1 = document.getElementById("ex1");
ex1.addEventListener("click",evenOrOdd);
function evenOrOdd(){
    num = prompt("Insira um Número");
    if(num%2==0){
        alert("True")
    }
    else{
        alert("False")
    }
}
//--------------------------------------------------
//Ex2
const ex2 = document.getElementById("ex2");
ex2.addEventListener("click",concatenate);
function concatenate(){
    palavra1 = prompt("Insira uma Palavra");
    palavra2 = prompt("Insira uma Palavra");
    palavra_concatenada = palavra1 + palavra2;
    alert(palavra_concatenada);
}
//--------------------------------------------------
//Ex3
const ex3 = document.getElementById("ex3");
ex3.addEventListener("click",concatenate);
function concatenate(){
    num = prompt("Insira um Número");
    let soma=0;
    for(let i=0;i<=num;i++){
        soma+=i;
    }
    alert(soma);
}
//--------------------------------------------------
//Ex4
const ex4 = document.getElementById("ex4");
ex4.addEventListener("click",random_game);
function random_game(){
    let num = 0;
    num_rand = parseInt(Math.random() * (10-1) + 1);
    console.log(num_rand);
        while (num!=num_rand){
            num = prompt("Insira um número");
            if(num>num_rand){
                alert("LOWER");
            }
            if(num<num_rand){
                alert("HIGHER");
            }
        }
        alert("Correct");
    
}
//--------------------------------------------------
//Ex5
const ex5 = document.getElementById("ex5");
ex5.addEventListener("click",convertCelsiusToFahrenheit);
function convertCelsiusToFahrenheit(){
    tempCelsius = prompt("Insira um número");
    let tempFahrenheit=(tempCelsius * 9/5) + 32;
    alert("Temperatura: " + tempFahrenheit);
            
}
//--------------------------------------------------
//Ex6
const ex6 = document.getElementById("ex6");
ex6.addEventListener("click",clicks);
let cliques=0
function clicks(){
    cliques+=1;
    console.log("Cliques= " + cliques);
    
            
}
//--------------------------------------------------
//Ex7
const ex7 = document.getElementById("ex7");
ex7.addEventListener("click",horas);
function horas(){
    data = new Date();
    const horas = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(horas);
    setTimeout(function() {
        console.clear();
      }, 1500); 
}
setInterval(horas,1000);
//--------------------------------------------------








  