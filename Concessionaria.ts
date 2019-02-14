import { ConcessionariaInterface } from "./ConcessionariaInterface";
import Carro from "./Carro";

export default class Concessionaria implements ConcessionariaInterface {
    
    private endereco: string
    private listaDeCarros: Carro[]
    

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string{
        return "Das segundas as sexta das 08:00 as 18:00 e sabado das 08:00 as 17:00"
    }

}