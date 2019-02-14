"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* ---- Criar carros ----*/
var carroA = new Carro_1.default("Dodge Journey", 4);
var carroB = new Carro_1.default("Veloster", 3);
var carroC = new Carro_1.default("Cerato", 4);
var carroD = new Carro_1.default("Ferrari", 2);
/* ----- Montar a lista de carros ---*/
var listaDeCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Concessionaria_1.default("Av Paulista", listaDeCarros);
/* ---- Exibir a lista de carros ----*/
//console.log(concessionaria.mostrarListaDeCarros())
/* ---- comprar o carro ----- */
var cliente = new Pessoa_1.default("Vitor", "Ferrari");
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (cliente.dizerCarroPreferido() == carro['modelo']) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
