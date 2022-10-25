const funcoes = require('./funcoes')

console.log("\n1 - Função que a partir de um arquivo lido, mostra os seus dados:")
funcoes.lerArquivo('./dados.txt')

console.log("\n2 - Função que a partir de um objeto JSON recebido, insere o mesmo dentro da coleção de objetos JSON")
//funcoes.guardaDado('./dados.txt', {"nome" : "Renato", "idade" : 30})
//funcoes.lerArquivo('./dados.txt')