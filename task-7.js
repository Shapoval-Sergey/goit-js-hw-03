/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      amount: amount,
      type: type,
    };
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    if (amount > this.balance) {
      console.log('снятие такой суммы не возможно, недостаточно средств');
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let idTransaction;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        idTransaction = this.transactions[i];
      }
    }
    return idTransaction;
  },

  getTransactionTotal(type) {
    let sumAllTransactions;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        sumAllTransactions += this.transactions[i].amount;
      }
    }
    return sumAllTransactions;
  },
};
