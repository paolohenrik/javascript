//Nomear funções - Verbo + Substantivo
let corSite = "azul";

function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};
console.log(corSite);
resetaCor("Laranja", "Escuro");
console.log(corSite);

//Tipos de funções 

    //Realizar tarefa e não retornar nada
    function dizerNome(){
        console.log('Paolo Henrik');
    };
    dizerNome();

    //Faz uma operação e retorna algo
    function MultiplicarPorDois(valor){
        return valor* 2;
    };
    console.log(MultiplicarPorDois(5));
    let resultado = MultiplicarPorDois(8);
    console.log(resultado);

    