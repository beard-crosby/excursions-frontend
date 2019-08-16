// https://blogs.msdn.microsoft.com/testing123/2009/02/06/email-address-test-cases/
const validEmailAddresses = [
    "email@domain.com",
    "firstname.lastname@domain.com",
    "email@subdomain.domain.com",
    "firstname+lastname@domain.com",
    "email@123.123.123.123",
    "email@[123.123.123.123]",
    '"email"@domain.com',
    "1234567890@domain.com",
    "email@domain-one.com",
    "_______@domain.com",
    "email@domain.name",
    "email@domain.co.jp",
    "firstname-lastname@domain.com",
]

const invalidEmailAddresses = [
    "plainaddress",
    "#@%^%#$@#$@#.com",
    "@domain.com",
    "Joe Smith <email@domain.com>",
    "email.domain.com",
    "email@domain@domain.com",
    ".email@domain.com",
    "email.@domain.com",
    "email..email@domain.com",
    "あいうえお@domain.com",
    "email@domain.com (Joe Smith)",
    "email@domain",
    "email@-domain.com",
    "email@domain.web",
    "email@111.222.333.44444",
    "email@domain..com]",
]

const validUsernames = [
    "user",
    "username",
    "username123",
    "Username123",
    "Username",
    "user_name",
]

const invalidUsernames = [
    "user name",
    "username!",
    "u",
    "123",
    "123123123123",
    "!",
]

context("Home Page", () => {
    describe("The Home Page", () => {
        it("successfully loads", () => {
            cy.visit("/")
        })
    })

    describe("The signup form", () => {
        it("displays error when invalid email in typed", () => {
            cy.get("#submit-signup").should("be.disabled")

            // Test valid email addresses.
            validEmailAddresses.forEach(e => {
                cy.get("#email").clear()
                cy.get('label[for="email"]').contains("Email")
                cy.get("#email").type(e)
                cy.get('label[for="email"]').contains("Email")
            })

            // Test invalid email addresses
            invalidEmailAddresses.forEach(e => {
                cy.get("#email").clear()
                cy.get('label[for="email"]').contains("Email")
                cy.get("#email").type(e)
                cy.get('label[for="email"]').contains(
                    "Please enter a valid Email."
                )
            })

            // Test valid usernames
            validUsernames.forEach(u => {
                cy.get('label[for="username"]').contains("Username")
                cy.get("#username").type(u)
                cy.get('label[for="username"]').contains("Username")
            })

            // Test invalid usernames
            invalidUsernames.forEach(u => {
                cy.get('label[for="username"]').contains("Username")
                cy.get("#username").type(u)
                cy.get('label[for="username"]').contains("Please enter a valid Username.")
            })

            
            cy.get("#full-name")
                .should("exist")
                .type("John Doe")
            cy.get("#password").type("password")
        })
    })
})
