alert('Bora, carai!');
console.log(123);
console.log(true) /* boolean */
var opa = 'olá!';
console.log(opa);
console.log([1, 2, 3, 4]);

console.log({ a: 1, b: 2 });


/* Variáveis e Declarações */

//var, let e const

var nome = 'Rodrigo Júlio';
console.log(nome);

nome = 'Adriana Aguiar';
console.log(nome)


// Inicializando variáveis
var saudacao
console.log(saudacao)
var saudacao = 'Olá';
console.log(saudacao);

// letras, numeros, _, $
//Não pode ser iniciado com um numero
var _nome = 'Preta Gil'

// var com múltipas plavras

var primeiroNome = 'Adriana ' //camel case
var primeiro_nome = 'Rodrigo ' // underscore
var PrimeiroNome = 'Ângela' // Pascal case

//let

let suaGraça;
suaGraça = 'Adriana da Silva'
console.log(suaGraça);
nome = 'Rodrigo Júlio'
console.log(suaGraça);


// const

const seuNome = 'Preta Gil';
console.log(seuNome); 

const pessoa = {
    nome: 'Adriana',
    idade: 30,
}

console.log(pessoa)

const numeros = [1, 2, 3, 4, 5];
numeros.push(6); // pode inserir outro número. não pode é tentar inserir outro array na constante. 

console.log(numeros)

// Primitivos

// Strings
const outroNome = 'Preta Gil';
// Numero
const Idade = 11;
//Boolean
const teveFilhores = false;
//Null
const carro = null;
// undefined
let teste;
// Symbol
const sym = Symbol();

//Referencia tipis - Objetos
//Array
const hobbies = ['latir', 'comer'];
//Objetos
const endereco = {
    cidade: 'Nova Iguaçu',
    estado: 'Rio de janeiro'
}

const hoje = new Date();
console.log(hoje)


    // Convenção te tipos
let val;


// Numero para String
val = String(555);
val = String(4 + 4);

// Bool to String
val = String(true);

// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4, 5]);

//toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Olá!');
val - Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');


// Output

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2)); //2 representa no número de casas decimais.


val1 = 5;
val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);


// números e objeto Matemáticos

const num1 = 100;
const num2 = 50;
let valor;

// Cálculo Simples

valor = num1 + num2;

// Objetos Matemáticos

valor = Math.PI;
valor = Math.E;
valor = Math.round(2.4);
valor = Math.ceil(2.4);
valor = Math.floor(2.8);
valor = Math.sqrt(64);
valor = Math.pow(8, 2);
valor = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
valor = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
valor = Math.random();

valor = Math.floor(Math.random() * 20 + 1);
console.log(valor);

// métodos de concatencação

const primeiro__Nome = 'Adriana ';
const segundo__Nome = 'da Silva';
var str = 'Olá! eu gosto de comer pão!';
var tags = 'Web Deign, Web Developer, Fotógrafo';

let vall;

vall = primeiro__Nome + segundo__Nome;
console.log(vall)

// concatenação
vall = primeiro__Nome + ' ' + segundo__Nome;

// Append
vall = 'Rodrigo';
vall += 'Júlio';

vall = 'Ólá, meu nome é ' + primeiro__Nome + ' e eu sou feliz';
console.log(vall);


// Escaping

val = 'marca d\água';
console.log(val);

// Length
val = primeiro__Nome.length
console.log(val);

//concatenar "concat"
val = primeiro__Nome.concat(' ', segundo__Nome);
console.log(val)

//mudar tamanho de letras

val = primeiro__Nome.toUpperCase();
console.log(val);
val = segundo__Nome.toLowerCase();
console.log(val);

// indexOf()
val = primeiro__Nome.indexOf(1);
console.log(val);
val = segundo__Nome.indexOf(1);
console.log(val);

// charAt()
val = primeiroNome.charAt('2')
console.log(val);

// obter o último caracter
val = primeiroNome.charAt(primeiroNome.length - 1);
console.log(val);

// substring()
val = primeiroNome.substring(0, 4);
console.log(val);

// slice()
val = primeiroNome.slice(0, 4);
console.log(val);
val = primeiroNome.slice(-3);
console.log(val);

//split()
val = str.split(' ');
console.log(val)
val = tags.split(',');
console.log(val)

// replace()
val = str.replace('Olá', 'Vá cagar');
console.log(val);


// includes()
val = str.includes('foo');
console.log(val)