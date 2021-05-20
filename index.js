const { accountDatabase } = require("./content");

const withdraw = (amount, accountNumber) => {
  const { account, accountIndex } = getAccount(accountNumber);

  if (!account) {
    return false;
  }

  if (account.balance < amount) {
    console.log("Balance not available");
    return false;
  }
  account.balance = account.balance - amount;
  console.log("You new balance is " + account.balance);

  accountDatabase[accountIndex] = account;

  return true;
};

const deposit = (amount, accountNumber) => {
  const { account, accountIndex } = getAccount(accountNumber);

  if (!account) {
    return false;
  }

  if (amount < 0) {
    console.log("Amount invalid, should be greater than 0");
    return false;
  }

  account.balance = account.balance + amount;
  console.log("You new balance is " + account.balance);

  accountDatabase[accountIndex] = account;

  return true;
};

const verifyIfAccountExists = (accountNumber) => {
  const account = accountDatabase.find(
    (account) => account.accountNumber === accountNumber
  );

  if (account) {
    return true;
  }
  return false;
};

const getAccount = (accountNumber) => {
  if (!verifyIfAccountExists(accountNumber)) {
    return false;
  }

  const accountIndex = accountDatabase.findIndex(
    (account) => account.accountNumber === accountNumber
  );

  const account = accountDatabase[accountIndex];

  return { account, accountIndex };
};

const fetchFirstNumberAccountOnly = (quantity) => {
  if (quantity >= 0) {
    if (typeof quantity !== "string") {
      if (quantity < accountDatabase.length) {
        accountDatabase.forEach((account) => {
          console.log(account);
        });
        return true;
      }
      console.log("Quantity is greater than the number of accounts registered");
      return false;
    }
    console.log("The value is a string, it must be an integer positive");
    return false;
  }
  console.log("The value is negative, it must be positive");
  return false;
};

const withDrawAndCheckTheBalance = (amount, accountNumber) => {
  if (withdraw(amount, accountNumber)) {
    const { account, _ } = getAccount(accountNumber);
    return account.balance;
  } else {
    return false;
  }
};

module.exports = {
  withdraw,
  verifyIfAccountExists,
  deposit,
  fetchFirstNumberAccountOnly,
  withDrawAndCheckTheBalance,
};
