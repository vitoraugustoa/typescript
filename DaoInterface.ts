export interface DaoInterface<T> {
    nomeTabela: string

    InseriDados(object: T):boolean
    atualizar(object: T): boolean
    remover(id: number): T
    selecionar(id: number): T
    selecionarTodos(): [T]

}