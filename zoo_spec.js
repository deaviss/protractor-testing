describe("input some text in google search", function () {
	it("to test input field and check text output", function () {
		browser.get("https://www.protractortest.org/#/api?view=ElementFinder");
		element(by.id("searchInput")).sendKeys("angular")
		element(by.id("searchInput")).getText().then(text => {
			console.log(text);
		})
	})
})