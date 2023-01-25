/*
3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
    a. Número da conta
    b. Nome do correntista
    c. Saldo
Os métodos são os seguintes:
    a) Alterar nome
    b) Deposito
    c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.
*/

export class ContaCorrente {
  numeroDaConta: string;
  nomeDoCorrentista: string;
  saldo: number;

  constructor(
    numeroDaConta: string,
    nomeDoCorrentista: string,
    saldo?: number
  ) {
    (this.numeroDaConta = numeroDaConta),
      (this.nomeDoCorrentista = nomeDoCorrentista),
      (this.saldo = saldo ?? 0);
  }

  alterarNome(novoNomeDoCorrentista: string) {
    this.nomeDoCorrentista = novoNomeDoCorrentista;
    console.log('Nome alterado com sucesso!');
  }
  deposito(valorDepositado: number) {
    this.saldo += valorDepositado;
    console.log('Valor depositado com sucesso!');
  }
  saque(valorSacado: number) {
    if (this.saldo < valorSacado) {
      console.log('Saldo não-suficiente!');
      return;
    }

    this.saldo -= valorSacado;
    console.log('Saldo modificado com sucesso!');
  }
  mostrarSaldo() {
    console.log(`Seu saldo atual é de ${this.saldo.toFixed(2)}`);
  }
}
