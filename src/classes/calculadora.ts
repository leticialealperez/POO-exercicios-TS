/*

Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
    a. Esta classe deve conter as operações de somar, multiplicar,
    dividir e diminuir.
    b. Esta classe deve iniciar com o histórico vazio
    c. Esta classe deve conter uma ação para visualizar o histórico.

*/

export class Calculadora {
  historico: string[];

  constructor() {
    this.historico = [];
  }

  somar(num1: number, num2: number) {
    const resultado = num1 + num2;
    this.historico.push(`${num1} + ${num2} = ${resultado}`);
    return resultado;
  }

  subtrair(numSub1: number, numSub2: number) {
    const resultadoSub = numSub1 - numSub2;
    this.historico.push(`${numSub1} - ${numSub2} = ${resultadoSub}`);
    return resultadoSub;
  }

  multiplicar(num1: number, num2: number) {
    const resultado = num1 * num2;
    this.historico.push(`${num1} * ${num2} = ${resultado}`);
    return resultado;
  }

  dividir(num1: number, num2: number) {
    const resultado = num1 / num2;
    this.historico.push(`${num1} / ${num2} = ${resultado}`);
    return resultado;
  }
}
