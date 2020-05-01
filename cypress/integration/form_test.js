const user={
    name: "test",
    email:"email@email.com",
    password:"password",
}

const errorUser={
    name:"",
    email:"email",
    password:"fail",
}

describe('Test 1', function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000")
    });
    it("test", () => {
        cy.get('[data-cy="name"]').type(user.name).should("have.value", user.name)
        cy.get('[data-cy="email"]').type(user.email).should("have.value", user.email)
        cy.get('[data-cy="password"]').type(user.password).should("have.value", user.password)
        cy.get('[data-cy="terms"]').check().should("be.checked")
        cy.get("form").submit();
    })
    it('button test',()=>{
        cy.get('[button-cy="button"]').should("be.disabled")
    })
    it('errors test', () => {
        cy.get('[data-cy="email"]').type(errorUser.email).should("have.value", errorUser.email)
        cy.get('[error-cy="name"]').type(errorUser.email).should("have.text", errorUser.email)
    })
})