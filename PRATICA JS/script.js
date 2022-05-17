//GRAVA UMA SEQUENCIA DE CARACTERES EM UM DOCUMENTO ABERTO 
document.write("<h1>Estamos executando o script.js</h1>");
//GRAVA UMA SEQUENCIA DE CARACTERES EM UM DOCUMENTO ABERTO 
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log("Esse script está no cabeçalho do HTML");
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log("Primeiro");
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log("Segundo");

// Comentário de uma linha

/*  Comentário 
    de 
    múltiplas
    Linhas
*/

// Tipagem fraca
// DECLARANDO UM VARIAVEL GLOBAL 
var teste = 1;
//GRAVA UMA SEQUENCIA DE CARACTERES EM UM DOCUMENTO ABERTO 
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
// ATRIBUINDO UM NOVO VALOR PARA VARIAVEL GLOBAL 
teste = 'joao';
//GRAVA UMA SEQUENCIA DE CARACTERES EM UM DOCUMENTO ABERTO 
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global - criada sem necessidade de declaração
nome = 'joao';
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(nome)

// Formas de declaração de variáveis

// DECLARANDO UMA VARIAVEL GLOBAL 
var   v1 = 5.25;
// DECLARANDO UM VARIAVEL PARA FAZER  REATRIBUIÇÕES 
let   v2 = null; 
// DECLARANDO UM VARIAVEL PARA FAZER  CONSTANTES 
const v3 = 'teste'
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof(v1));
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof(v2));
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof(v3));
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof NaN); // tipo number
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof +Infinity); // tipo number
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof null); // tipo number
// DECLARANDO UM VARIAVEL PARA FAZER  CONSTANTES 
const number = "1";
// Operadores de comparação
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR COM OPERADORES DE COMPARAÇÃO
console.log(number == 1);
// true
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR COM OPERADORES DE COMPARAÇÃO
console.log(number === 1);
// false

// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR COM OPERADORES DE COMPARAÇÃO
console.log('ele disse "vtnc"');

// adicionar uma lista no body do HTML
// DECLARANDO UMA VARIAVEL GLOBAL 
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];
// DECLARANDO UMA VARIAVEL GLOBAL EM LISTA ORDENADA
var listaUl = document.createElement('ul');
// DECLARANDO UMA VARIAVEL GLOBAL 
var body = document.getElementsByTagName('body');
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(listaUl);
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(body);

//alert("Vamos criar uma lista aqui!");

// INSERINDO UM ELEMENTO FILHO AO ELEMENTO PAI insere 
body[0].appendChild(listaUl);

// DECLARANDO UMA CONDIÇÃO
for(var  i=0;i<lista.length;i++) {  
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}


//GRAVA UMA SEQUENCIA DE CARACTERES EM UM DOCUMENTO ABERTO 
document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

// DECLARANDO UMA VARIAVEL GLOBAL 
var obj = {
    nome: "Joao",
    sobrenome: "Furtado",
    profissao: "jogador",
    salario: 120000,
    pessoaJuridica: true
};
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(obj);
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log("Salario: R$" + obj.salario);
// PERCORRENTO ELEMENTOS
var arr = [5, "JP", true, {teste1: 1, teste2: 2}, false];
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(arr);
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(arr[1]);
// ESTE METODO DE CONSOLE VAI ENVIAR OS DADOS DIRETAMENTE PARA O CONSOLE DO NAVEGADOR
console.log(typeof arr);
// DECLARANDO UMA CONDIÇÃO
if(arr[4]) {
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
// DECLARANDO UMA CONDIÇÃO
if (obj.salario > '100000') {
    console.log("Salário acima de 100 mil");
}