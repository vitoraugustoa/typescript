import Carro from './Carro'
import Pessoa from './Pessoa' 
import Concessionaria from "./Concessionaria";



/* ---- Criar carros ----*/

let carroA = new Carro("Dodge Journey",4)
let carroB = new Carro("Veloster",3)
let carroC = new Carro("Cerato",4)
let carroD = new Carro("Ferrari",2)


/* ----- Montar a lista de carros ---*/

let listaDeCarros: Carro[] = [carroA, carroB, carroC, carroD]

let concessionaria = new Concessionaria("Av Paulista",listaDeCarros)

/* ---- Exibir a lista de carros ----*/

//console.log(concessionaria.mostrarListaDeCarros())

/* ---- comprar o carro ----- */

let cliente = new Pessoa("Vitor","Ferrari")
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(cliente.dizerCarroPreferido() == carro['modelo']){
        // comprar o carro
        cliente.comprarCarro(carro)
    }

})


console.log(cliente.dizerCarroQueTem())