class ContaBancarias {
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }

    interpolacao() {
        return `Saldo do dia ${this._saldo}`
    }
}

const conta = new ContaBancarias(1000);

console.log(conta.interpolacao);
