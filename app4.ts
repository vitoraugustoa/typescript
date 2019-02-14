//import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
//import { PessoaDao } from './PessoaDAO';
import Pessoa from './Pessoa';
import { Dao } from './Dao';

//let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria("",[]);
//let dao2: PessoaDao = new PessoaDao(); 
let pessoa: Pessoa = new Pessoa('','');

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4: Dao<Pessoa> = new Dao<Pessoa>();

dao3.InseriDados(concessionaria);
dao4.selecionar(23);