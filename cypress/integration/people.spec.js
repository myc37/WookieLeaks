/// <reference types="cypress"/>

context("People Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/people");
	});

	it("Should find the navigation bar with working links", () => {
		cy.get("a").contains("wookieleaks").click();
		cy.url().should("eq", "http://localhost:3000/");

		cy.get("a").contains("people").click();
		cy.url().should("include", "/people");

		cy.get("a").contains("quiz").click();
		cy.url().should("include", "/quiz");
	});

	it("Should find all the Select components", () => {
		cy.get(".bg-zinc-800").should("have.length", 82);
	});
});
