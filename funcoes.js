//funcao que recebe nome e caminho de um arquivo e retorna os dados


//funcao que recebe um objeto JSON e o nome e caminho de um arquivo e adiciona esse objeto na coleção de objets JSON no arquivo em questao


//funcao que recebe nome de um atributo e nome e caminho de um arquivo e retorna um objeto cuja esse nome esta na coleção de objetos

//funcao que recebe o nome de um atributo e nome e caminho de um arquivo e remove o objeto da coleção de objetos

const fs = require('fs')

const pessoas = [{"nome" : "Maria", "Idade" : 12},
                 {"nome" : "João", "Idade" : 10},
                 {"nome" : "Carlos", "idade" : 18},
                 {"nome" : "Julia", "idade" : 17},
                 {"nome" : "Eduarda", "idade" : 19},
                 {"nome" : "Mário", "idade" : 9},
                 {"nome" : "José", "idade" : 25},
                 {"nome" : "Luciana", "idade" : 39},
                 {"nome" : "Adriana", "idade" : 47},
                 {"nome" : "Márcio", "idade" : 52},
                 {"nome" : "Misael", "idade" : 20},
                 {"nome" : "Anderson", "idade" : 17},
                 {"nome" : "Gabriela", "idade" : 15},
                 {"nome" : "Manuele", "idade" : 19}]

let arquivo = "dados.txt"

fs.writeFileSync(arquivo, JSON.stringify(pessoas))

const lerArquivo = (arquivo) => {
    dadosJSON = JSON.parse(fs.readFileSync(arquivo).toString('UTF8'))
    console.log(dadosJSON)
}


const adicionaNovoDado = (arquivo, objeto) => {
    fs.lerArquivo(arquivo, adicionaNovoDado)
    fs.writeFileSync(arquivo, JSON.stringify(dado))
}


module.exports = {lerArquivo, adicionaNovoDado}




