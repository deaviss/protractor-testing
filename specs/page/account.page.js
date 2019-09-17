'use strict';
function Account() {
	var depositButton = element(by.buttonText('Deposit'));
	var withdrawlButton = element(by.buttonText('Withdrawl'));

	function deposit(amount) {
		depositButton.click();
		var depositField = element(by.model('amount'));
		depositField.sendKeys(amount);
		element(by.className('btn btn-default')).click();
		return element(by.className('error ng-binding')).getText();
	}

	function withdraw(amount) {
		withdrawlButton.click();
		var depositField = element(by.model('amount'));
		depositField.sendKeys(amount);
		element(by.className('btn btn-default')).click();
		return element(by.className('error ng-binding')).getText();
	}

	function getUserBalance() {
		return element(by.css('div.center > strong:nth-last-child(2)')).getText()
	}

	return {
		deposit: deposit,
		withdraw: withdraw,
		getUserBalance: getUserBalance
	}
}

module.exports = new Account();