/// <reference types="cypress"/>

context("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("Should find the navigation bar with working links", () => {
		cy.get("a").contains("wookieleaks").click();
		cy.url().should("eq", "http://localhost:3000/");

		cy.get("a").contains("people").click();
		cy.url().should("include", "/people");

		cy.get("a").contains("quiz").click();
		cy.url().should("include", "/quiz");
	});

	it("Should find home page and message", () => {
		cy.get("div").contains("discover the");
		cy.get("div").contains("universe of");
	});

	it("Should find working explore button", () => {
		cy.get("div").contains("explore").click();
		cy.url().should("include", "/people");
	});
});
