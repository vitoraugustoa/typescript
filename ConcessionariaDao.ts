import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'


export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    InseriDados(object: Concessionaria):boolean{
        console.log('lógica de insert')
        return true
    }   
    atualizar(object: Concessionaria): boolean {
        console.log('lógica de update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('lógica de delete')
        return new Concessionaria("",[])
    }
    selecionar(id: number): Concessionaria {
        console.log('lógica de select')
        return new Concessionaria("",[])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('lógica de select all')
        return [new Concessionaria('',[])]
    }
}