'use strict';
describe('Testowanie poprawnosci wplacania pieniedzy na konto', () => {
	it('Powinno wejsc na strone glowna i kliknac przycisk zaloguj', () => {
		var loginPage = require('../page/login.page');
		loginPage.get();
		var loginCustomer = loginPage.clickLoginButton();

		loginCustomer.selectUser(2);

		var accountPage = loginCustomer.clickContinue();
	})
})

describe('Test operacji na koncie', () => {
	var accountPage = require('../page/account.page.js');
	it('Powinno wplacic $100 na konto', () => {
		var result = accountPage.deposit(100);
		expect(result).toBe('Deposit Successful');
		console.log('Wplacono $100')
	})
	it('Powinno wyplacic $100 jezeli uzytkownik posiada n>=$100', async () => {
		var balance = await accountPage.getUserBalance();
		console.log('Balance', balance)
		if (parseFloat(balance) >= 100) {
			var result = accountPage.withdraw(100);
			expect(result).toBe('Transaction successful');
		} else {
			console.log('Nie masz wystarczajaco srodkow')
		}

	})
})