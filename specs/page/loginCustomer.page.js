'use strict';
function loginCustomer() {
	var userSelect = element(by.model('custId'));
	var loginBtn = element(by.buttonText('Login'));

	function selectUser(index) {
		userSelect.$(`[value="${index}"]`).click();
	}

	function clickContinue() {
		loginBtn.click();
	}

	return {
		selectUser: selectUser,
		clickContinue: clickContinue,
	}

}

module.exports = new loginCustomer();