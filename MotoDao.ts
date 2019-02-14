import { DaoInterface } from './DaoInterface';
import Moto from './moto';


export class MotoDao implements DaoInterface {

    nomeTabela: string = 'tb_moto';

    InseriDados(object: Moto):boolean{
        console.log('lógica de insert');
        return true;
    }   
    atualizar(object: Moto): boolean {
        console.log('lógica de update');
        return true;
    }
    remover(id: number): Moto {
        console.log('lógica de delete');
        return new Moto();
    }
    selecionar(id: number): Moto {
        console.log('lógica de select');
        return new Moto();
    }
    selecionarTodos(): [Moto] {
        console.log('lógica de select all');
        return [new Moto()];
    }

}