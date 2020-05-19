//variaveis que tem seus valores alterados por algum motivo
let idade = 5;
idade = 10;
console.log(idade);
let altura = 180;
altura = 150;
console.log(altura);

// Nunca comece variáveis ​​com número ou caracteres especiais

// As variáveis ​​são sensíveis a maiúsculas e minúsculas então a mesma palavra pode ser 2 variáveis ​​diferenteslet 
nomE = 'Paolo ';
let nome = 'Henrik';
let nomeCompleto = nomE + nome;
console.log(nomeCompleto);

//Constantes não podem mudar seus valores
const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

//Tipos primitivos 
let primeiroNome = 'Paolo'; //string literal
let idadE = 29; //Number literal
let estaAprovado = true; //Boolean
let sobrenome = undefined; //Undefined
let corSelecionada = null; //Objeto - vazil - resetar valores

//Tipagem dinâmica 
//let tipoVariavel = 'Nome';
//let tipoVariavel = 5;
//let tipoVariavel = true;
let tipoVariavel = null;

let tipo = typeof tipoVariavel;
console.log(tipo);

//Objetos - Tipos de referencias 
let variavelObjeto = {}; //Obejto vazil 
let pessoa = { //Obejto com array
    nome: 'Paolo',
    idade: 29,
    estaAprovado: true,
    sobrenome: 'Henrik'
};
console.log(pessoa);

//Arrays
let familia = [true,29,'Paolo',17]; //Array com varios tipos de variaveis 
console.log(familia); //Exibe todo o array com seus indices 
console.log(familia[2]); //Exibindo um indice especifico