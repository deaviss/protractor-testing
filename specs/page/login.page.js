'use strict';
require('../page/loginCustomer.page.js');
function homePage() {
	var loginButton = element(by.buttonText('Customer Login'));

	function get() {
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	}

	function clickLoginButton() {
		loginButton.click();
		return require('./loginCustomer.page.js');
	}

	return {
		get: get,
		clickLoginButton: clickLoginButton
	}

}

module.exports = new homePage();