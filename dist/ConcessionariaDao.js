"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.InseriDados = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('lógica de delete');
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('lógica de select');
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('lógica de select all');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
