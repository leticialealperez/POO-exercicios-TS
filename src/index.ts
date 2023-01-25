import { Calculadora, ContaCorrente, Normal, Camarote, VIP, ImovelNovo, ImovelVelho, Cachorro, Cavalo, Gato, Universidade, Pessoa } from './classes';

// lista 01


// ---- EXERCICIO 3 -------------
// const contaUm = new ContaCorrente('1', 'Anderson', 100000);
// contaUm.alterarNome('Vilsén');
// contaUm.deposito(200);
// contaUm.saque(100);
// contaUm.saque(1000000000);
// contaUm.mostrarSaldo();

//Construtor : função responsável por setar os valores das propriedades.
//O ideal é começar validando o erro.

// ---- EXERCICIO  -------------
// const minhaCalculadora = new Calculadora();
// console.log(minhaCalculadora.somar(5, 3));
// console.log(minhaCalculadora.subtrair(6, 5));
// console.log(minhaCalculadora.multiplicar(9, 5));
// console.log(minhaCalculadora.dividir(10, 0));

// lista 02
// exercicio 1

// const ingressoNormal = new Normal();
// const ingressoVip = new VIP();
// const ingressoCamarote = new Camarote();

// ingressoNormal.imprimeValor()
// ingressoVip.imprimeValor()
// ingressoCamarote.imprimeValor()


//

// const imovelNovo = new ImovelNovo('Rua José Pedro, 44 - Campo Bom/RS', 45000);
// const imovelVelho = new ImovelVelho('Rua José Pedro, 44 - Campo Bom/RS', 35000);

// imovelNovo.imprimeValor()
// imovelVelho.imprimeDesconto()


// const cachorro = new Cachorro(4, 'caramelo', 15, 'vira-lata')
// const cavalo = new Cavalo(4, 'marrom', 400, 'arabe')
// const gato = new Gato(4, 'branco', 4, 'persa')

// cachorro.latir()
// console.log(cachorro.getRaca);
// cavalo.galopar()
// cavalo.dormir()
// gato.caminhar()
// console.log(gato.getRaca);

const universidade = new Universidade('Unisinos', 'Rua dos Bobos');
const pessoa = new Pessoa('Cavalo pru', '31/02/2012', universidade);

pessoa.mostrarDados();