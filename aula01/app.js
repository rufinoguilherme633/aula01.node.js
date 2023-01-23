// permite ver uma mensagem via terminal
console.log('testando o node.JS');


// comentario em linha

/* 
comentário em bloco
*/

//  require ->import da biblioteca que faz entarada de dados pelo usuário
//var -> variável
// readline -> nome dad biblioteca 
//função callback

var readline = require('readline');
//dizendo o que o read line vai fazer
//createinterface chamada de função dentro e demtro passamos a instrução 
//dizendo que entrada de dados recebe readline
//criamos um objeto entradaDados com as referÊNCIA DE readline

var entradaDados = readline.createInterface({
    //dizendo entrado vai vir via teclado (input)
    input: process.stdin,
    //retorna na tela output
    output: process.stdout
});
//como pedir pro usuario digitar???
//question -> aparece na tela e aguarda na tela e vai levar para o servidor
//para levar ate a função temos que criar uma função -> function(dados){} -> parametro
//entrada dados pega conteudo digitado traz para ele mesmo atraves function ndados
//chama a funcao e manda para o servidor
//call back -> função que qunado chamada ela retorna seu conteudo em uma unica instrução em apenas um passo, ou seja, em apenas um passo de programação
//criamos uma função de callback para receber os dados digitadps
//objeto entradaDados aguarda a digitação do usuário, após a digitação do conteúdo é acionado um call back para encaminhar os dados para o console.log, esse conteudo foi encaminhado através do parametro dados da função
entradaDados.question("Digite seu nome\n", function(dados) {
    //o que vai acontecer
    console.log('Bem vindo, ' + dados + ' ao servidor node.JS');


});

//utilizando a biblioteca