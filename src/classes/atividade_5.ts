interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: ItemPedido): void; 
}

/*
  {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

*/

class Pedido implements ValorPedido, Desconto {
  itens: ItemPedido[];
  private _totalPedido: number;

  get totalPedido() {
    return this._totalPedido;
  }

  constructor() {
    this.itens = [];
    this._totalPedido = 0;
  }
  recuperarValorTotal(): number {
    throw new Error('Method not implemented.');
  }

  aplicarDescontoEmReais(desconto: number): void {
    // lógica para aplicar descontos
    if (this._totalPedido === 0) {
      console.log(
        'Desconto não poderá ser concedido. Adicione itens no pedido.'
      );
      return;
    }

    if (this._totalPedido < desconto) {
      console.log(
        'Desconto não poderá ser concedido. O valor da pedido deve ser maior.'
      );
      return;
    }

    if (desconto <= 0) {
      console.log(
        'Desconto não poderá ser concedido. O valor do desconto deve ser maior que zero.'
      );
      return;
    }

    this._totalPedido -= desconto;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    if (desconto > 100 || desconto <= 0) {
      console.log(
        'Desconto não poderá ser concedido. Valor de desconto inválido.'
      );
      return;
    }

    const porcentagem = desconto / 100;
    const descontoEmReais = this._totalPedido * porcentagem;
    this._totalPedido -= descontoEmReais;
  }

  add(item: ItemPedido): void {
    this.itens.push(item);
    this._totalPedido += item.valor;
  }

  removeItem(item: ItemPedido): void {
    // lógica para rmeover um item do pedido
    const indiceRemover = this.itens.findIndex(
      (value) => value.nome === item.nome
    );

    if (indiceRemover === -1) {
      console.log('Item não encontrado');
      return;
    }

    this.itens.splice(indiceRemover, 1);
    this._totalPedido -= item.valor;
  }
}

class ItemPedido implements Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;

    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}
