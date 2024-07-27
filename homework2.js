//Exploring Functions in JavaScript

//Function to handle deposits
let bankAccount = {
    balance: 0,
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}.`);
        } else {
            console,log('Deposit amount must be positive.');
        }
    },
    //Function to handle withdrawals
    withdraw: function(amount) {
        console.log(`Withdraw: $${amount}.`);
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                
                console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
            } else {
                console.log(`Insufficient funds. Your current balance is: $${this.balance}.`);
            }
        } else {
            console.log('withdrawal amount must be positive.');
        }
    },
    getBalance: function() {
        console.log(`Current balance: $${this.balance}.`);
        return this.balance;
    }
};

// Example 
bankAccount.deposit(200);
bankAccount.withdraw(75);
bankAccount.getBalance();
bankAccount.withdraw(1000);