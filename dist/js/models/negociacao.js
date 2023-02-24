export class Negociacao {

    #data;
    #quantidade;
    #valor;


    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }

    // set quantidade(quantidade) {
    //     if (quantidade <= 0) {
    //         throw new Error('Quantidade inválida!');
    //     }
    //     this.#quantidade = quantidade;
    // }
    //
    // set valor(valor) {
    //     if (valor <= 0) {
    //         throw new Error('Valor inválido!');
    //     }
    //     this.#valor = valor;
    // }
    //
    // set data(data) {
    //     if (!this.#data) {
    //         throw new Error('Data inválida!');
    //     }
    //     this.#data = data;
    // }
}
