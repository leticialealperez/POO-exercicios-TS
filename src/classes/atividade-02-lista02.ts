/*

Crie a classe (abstrata) Imovel, que possui um endereço e um preço.
    a. crie uma classe Novo, que herda Imovel e possui um adicional
    no preço. Crie métodos de acesso e impressão deste valor
    adicional.
    b. crie uma classe Velho, que herda Imovel e possui um desconto
    no preço. Crie métodos de acesso e impressão para este
    desconto.

*/

abstract class Imovel {
    endereco: string;
    preco: number;

    constructor(endereco: string, preco: number ) {
        this.endereco = endereco
        this.preco = preco
    } 
};

// a. crie uma classe Novo, que herda Imovel e possui um adicional no preço. Crie métodos de acesso e impressão deste valor adicional.
export class ImovelNovo extends Imovel {
    precoAdicional: number;

    constructor(endereco: string, preco: number) {
        super(endereco, preco);
        this.precoAdicional = 10000;
    }
    imprimeValor(): void {
        console.log(`Valor total do imóvel com adicional: ${this.precoAdicional + this.preco}`)
    }
};

export class ImovelVelho extends Imovel {
    precoDesconto: number;

    constructor(endereco: string, preco: number) {
        super(endereco, preco);
        this.precoDesconto = 5000;
    }
    imprimeDesconto(): void {
        console.log(`Valor total do imóvel com desconto: ${this.preco - this.precoDesconto}`)
    }
};


