describe('Test 1', function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000")
    });
    it("test", () => {
        cy.get('[data-cy="name"]').type("Taja").should("have.value", "Taja")
        cy.get('[data-cy="email"]').type("taja@email.com").should("have.value", "taja@email.com")
        cy.get('[data-cy="password"]').type("password").should("have.value", "password")
        cy.get('[data-cy="terms"]').check().should("be.checked")
        cy.get("form").submit();
    })
})