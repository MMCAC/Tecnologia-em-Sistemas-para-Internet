const prompt = require('prompt-sync')();

class BankAccount{
    constructor(balance, accountNumber){
        this.balance = balance;
        this.accountNumber = accountNumber;
        var saldo;
    }
    deposit(saldo)
    {
        this.balance += saldo;
        return `O saldo é de: ${this.balance}`
    }
    withdraw(saldo)
    {
        this.balance -= saldo;
        return `O saldo é de: ${this.balance}`
    }
}
const conta = new BankAccount(10000, 12345);

const tipo = prompt("Informe se gostaria de depositar(1) ou retirar(2): ");
const saldo = prompt("Informe o valor: ");

if(tipo == 1)
{
    console.log(conta.deposit(saldo));
} else {
    console.log(conta.withdraw(saldo));
}