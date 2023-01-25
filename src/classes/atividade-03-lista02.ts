/*

Identifique os atributos e comportamentos que são comuns entre os 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1 comportamento diferente para cada animal.

*/
export abstract class Animal {
    private patas: number;
    private cor: string;
    private peso: number;
    private raca: string;

    constructor(patas:number, cor: string, peso:number, raca:string){
        this.patas = patas;
        this.cor = cor;
        this.peso = peso;
        this.raca = raca;
        }
    
    get getPatas(){
        return this.patas
    }
    get getCor(){
        return this.cor
    }
    get getPeso(){
        return this.peso
    }
    get getRaca(){
        return this.raca
    }
    caminhar() {
        console.log('começou a caminhar')
    }

    dormir() {
        console.log('o bicho foi dormir')
    }

    fazerBarulho(){
        console.log('o animal fez barulho')
    }
}


export class Cachorro extends Animal {
   constructor(patas: number, cor: string, peso:number, raca: string){
    super(patas, cor, peso, raca)
   }
    latir(): void {
       console.log('o cachorro LATIU')
   }
}

export class Cavalo extends Animal {
   constructor(patas: number, cor: string, peso:number, raca: string){
    super(patas, cor, peso, raca)
   }
    galopar(): void {
       console.log('o cavalo galopou')
   }
}


export class Gato extends Animal {
   constructor(patas: number, cor: string, peso:number, raca: string){
    super(patas, cor, peso, raca)
   }
    ronronar(): void {
       console.log('o gato Ronronou')
   }
}


