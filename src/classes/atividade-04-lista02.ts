/*

4. Crie as seguintes classes:
    a. Crie uma classe chamada Universidade, que terá como
    atributos: nome e local. Além disso, deve possuir um método
    construtor e métodos para encapsulamento dos seus
    atributos.
    b. Uma classe chamada Pessoa, com os atributos: nome e data
    de nascimento (que pode ser String). Assim como na outra
    classe, crie um método construtor e métodos para
    encapsulamento de seus atributos.
    c. Cada pessoa poderá estar associada a uma universidade.
    d. A classe pessoa deve possuir um método que informe seus
    atributos e a universidade em que trabalha.

*/
//-a
export class Universidade {
    private _nome: string;
    private _local: string;

    constructor(nome: string, local: string) {
        this._nome = nome;
        this._local = local;
    }

    get nome(){
        return this._nome;
    }

    get local(){
        return this._local;
    }
}

//-b
export class Pessoa {
    private _nome: string;
    private _data: string;
    private _universidade: Universidade;

    constructor(nome: string, data: string, universidade: Universidade){
        this._nome = nome;
        this._data = data;
        this._universidade = universidade;
    }

    get data(){
        return this._data;
    }

    get nome(){
        return this._nome;
    }

    get universidade(){
        return this._universidade;
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome} | Data: ${this.data} | Universidade: ${this._universidade.nome} - Local: ${this._universidade.local}`);
    }
}