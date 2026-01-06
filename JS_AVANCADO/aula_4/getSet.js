class ContaBancaria {
    constructor(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoValor) {
        if (novoValor <= 0) {
            console.error("É necessário inserir um valor!");
            return;
        } else {
            this._saldo = this._saldo + novoValor;
        }
    }
}

const conta = new ContaBancaria(-1000);


console.log(conta);
