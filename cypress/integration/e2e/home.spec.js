context("Home Page", () => {
    describe("The Home Page", () => {
        it("successfully loads", () => {
            cy.visit("/")
        })
    })

    describe("The signup form", ()=> {
        it("displays error when invalid email in typed", () => {
            cy.get('#email-label').contains('Email')
            cy.get('#email').type('notanemailaddress')
            cy.get('#username').type('validusername')
            cy.get('#email-label').contains('Please enter a valid Email.')
            cy.get('#submit-signup').should('be.disabled')
            cy.get('#full-name').should('exist').type('John Doe')
            cy.get('#password').type('password')
        })
    })
})
