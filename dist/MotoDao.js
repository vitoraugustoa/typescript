"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moto_1 = __importDefault(require("./moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.InseriDados = function (object) {
        console.log('lógica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('lógica de delete');
        return new moto_1.default();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('lógica de select');
        return new moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('lógica de select all');
        return [new moto_1.default()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
