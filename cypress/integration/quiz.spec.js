/// <reference types="cypress"/>

context("Quiz Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/quiz");
	});

	it("Should find the navigation bar with working links", () => {
		cy.get("a").contains("wookieleaks").click();
		cy.url().should("eq", "http://localhost:3000/");

		cy.get("a").contains("people").click();
		cy.url().should("include", "/people");

		cy.get("a").contains("quiz").click();
		cy.url().should("include", "/quiz");
	});

	it("Should find the quiz message", () => {
		cy.get("div").contains("challenge yourself to");
		cy.get("div").contains("name everyone in");
	});

	it("Should find the quiz start button", () => {
		cy.get("div").contains("start");
	});
});
