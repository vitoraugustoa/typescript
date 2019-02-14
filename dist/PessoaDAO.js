"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_Pessoa';
    }
    PessoaDao.prototype.InseriDados = function (object) {
        console.log('lógica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica de delete');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica de select');
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('lógica de select all');
        return [new Pessoa_1.default('', "")];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
