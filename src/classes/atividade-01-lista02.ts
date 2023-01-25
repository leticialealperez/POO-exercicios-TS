/*

Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
    a. crie uma classe Normal, que herda Ingresso..
    b. crie uma classe VIP, que herda Ingresso e possui um valor
    adicional. Altere o método imprimeValor para mostrar o valor
    do ingresso somado com o adicional.
    c. crie uma classe Camarote, que herda ingresso e possui um
    valor adicional. Altere o método imprimeValor para mostrar o
    valor do ingresso somado com o adicional.

*/

// criar uma classe abstrata
abstract class Ingresso {
    protected valorIngresso: number;

    constructor() {
        this.valorIngresso = 20;
    }

    imprimeValor() {
        console.log(`Valor do ingresso: ${this.valorIngresso}`)
    }
}

// a. crie uma classe Normal, que herda Ingresso..
export class Normal extends Ingresso {}

// b. crie uma classe VIP, que herda Ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.
export class VIP extends Ingresso {
    valorAdicional: number;

    constructor() {
       super();
       this.valorAdicional = 20
    }

    imprimeValor(): void{
        console.log(`Valor ingresso VIP: ${this.valorIngresso + this.valorAdicional}`)
    }

}

// c. crie uma classe Camarote, que herda ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.
export class Camarote extends Ingresso {
    valorAdicional: number;

    constructor() {
        super();
        this.valorAdicional = 50;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso Camarote: ${this.valorIngresso + this.valorAdicional}`)
    }
}






