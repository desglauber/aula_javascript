/*
var nome = "Glauber Farias";
var idade = 38, idade2 = 10;
alert("Bem vindo, " + nome + "!");
console.log(nome);
console.log(idade + idade2);
*/
/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
alert(lista[0]);

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*
var frtuta = {nome:"maçã", cor:"vermelha"}
console.log(frtuta.nome);
alert(frtuta.cor);

var frtutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"vermelha"}]
console.log(frtutas);
alert(frtutas[1].nome);
*/

/*var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Você é maior de idade.");
}
else {
    alert("Você é menor de idade.");
}
*/

/*
var count = 0;
while (count < 5){
    alert(count);
    count++;
}
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

alert (soma(5, 10));
*/

/*
var validar;
function validarIdade(idade){
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade:");
validarIdade(idade)
console.log(validar);
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar!</b>";
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.manaus.am.gov.br");
    //window.location.href = "https://www.manaus.am.gov.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //alert("Trocar texto");
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
   elemento.innerHTML = "Passe o mouse aqui.";    
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}