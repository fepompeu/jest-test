const functions = require("./index");

describe("{withdraw}: Withdraw an amount from an account", () => {
  test("Should return TRUE, because the account exist and there is enough balance", () => {
    const movementResponse = functions.withdraw(150, "0025");
    expect(movementResponse).toBe(true);
  });

  test("Should return TRUE, because the account exist and there is enough balance", () => {
    const movementResponse = functions.withdraw(50, "0025");
    expect(movementResponse).toBe(true);
  });

  test("Should return FALSE, because the account exist but there is not enough balance", () => {
    const movementResponse = functions.withdraw(50, "0025");
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account not exist", () => {
    const movementResponse = functions.withdraw(50, "5025");
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account number is integer instead of string", () => {
    const movementResponse = functions.withdraw(50, 500);
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account number is integer instead of string, although the account number exists", () => {
    const movementResponse = functions.withdraw(50, 1000);
    expect(movementResponse).toBe(false);
  });
});

describe("{verifyIfAccountExists}: Verify if the account really exists", () => {
  test("Should return TRUE, because the account exist", () => {
    const accountResponse = functions.verifyIfAccountExists("0025");
    expect(accountResponse).toBe(true);
  });

  test("Should return TRUE, because the account exist", () => {
    const accountResponse = functions.verifyIfAccountExists("1000");
    expect(accountResponse).toBe(true);
  });

  test("Should return FALSE, because the account not exist", () => {
    const accountResponse = functions.verifyIfAccountExists("5025");
    expect(accountResponse).toBe(false);
  });

  test("Should return FALSE, because the account is integer instead of string", () => {
    const accountResponse = functions.verifyIfAccountExists(500);
    expect(accountResponse).toBe(false);
  });

  test("Should return FALSE, because the account is integer instead of string, although the account number exists", () => {
    const accountResponse = functions.verifyIfAccountExists(500);
    expect(accountResponse).toBe(false);
  });
});

describe("{Deposit}: Deposit an amount to an account", () => {
  test("Should return TRUE, because the account exist and the amount is greater than zero", () => {
    const movementResponse = functions.deposit(150, "0025");
    expect(movementResponse).toBe(true);
  });

  test("Should return TRUE, because the account exist and the amount is greater than zero", () => {
    const movementResponse = functions.deposit(550, "0025");
    expect(movementResponse).toBe(true);
  });

  test("Should return FALSE, because the account exist but the amount is less than zero", () => {
    const movementResponse = functions.deposit(-500, "0025");
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account not exist", () => {
    const movementResponse = functions.deposit(500, "5025");
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account is integer instead of string", () => {
    const movementResponse = functions.deposit(50, 500);
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account is integer instead of string, although the account number exists", () => {
    const movementResponse = functions.deposit(50, 1000);
    expect(movementResponse).toBe(false);
  });
});

describe("{fetchFirstNumberAccountOnly}: List account", () => {
  test("Should return TRUE, because the quantity of fetch is valid and we could see the accounts", () => {
    const movementResponse = functions.fetchFirstNumberAccountOnly(3);
    expect(movementResponse).toBe(true);
  });

  test("Should return TRUE, because the quantity of fetch is valid and we could see the accounts", () => {
    const movementResponse = functions.fetchFirstNumberAccountOnly(0);
    expect(movementResponse).toBe(true);
  });

  test("Should return FALSE, because is an invalid quantity, it's a string when should be integer", () => {
    const movementResponse = functions.fetchFirstNumberAccountOnly("2");
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the quantity is bigger than the database", () => {
    const movementResponse = functions.fetchFirstNumberAccountOnly(200);
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the quantity is negative", () => {
    const movementResponse = functions.fetchFirstNumberAccountOnly(-2);
    expect(movementResponse).toBe(false);
  });
});

describe("{withDrawAndCheckTheBalance}: Withdraw an amount from an account and get the new balance", () => {
  test("Should return TRUE, because the account exist and there is enough balance", () => {
    const movementResponse = functions.withDrawAndCheckTheBalance(150, "0025");
    expect(movementResponse).toBeGreaterThanOrEqual(0);
  });

  test("Should return TRUE, because the account exist and there is enough balance", () => {
    const movementResponse = functions.withDrawAndCheckTheBalance(50, "0025");
    expect(movementResponse).toBeGreaterThanOrEqual(0);
  });

  test("Should return FALSE, because the account not exist", () => {
    const movementResponse = functions.withDrawAndCheckTheBalance(50, "5025");
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account number is integer instead of string", () => {
    const movementResponse = functions.withDrawAndCheckTheBalance(50, 500);
    expect(movementResponse).toBe(false);
  });

  test("Should return FALSE, because the account number is integer instead of string, although the account number exists", () => {
    const movementResponse = functions.withDrawAndCheckTheBalance(50, 1000);
    expect(movementResponse).toBe(false);
  });
});
