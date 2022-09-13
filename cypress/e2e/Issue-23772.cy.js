/// <reference types="cypress" />

describe('Cypress Crash on Stript payment issue - 23772', () => {

    it("Open Payment page", () => {

        const paymentURL = "https://stagingproducts.qcs.co.uk/sales/confirm?key=C30AB5464F594B77B2D3C46A0ED75180"

        cy.visit(paymentURL)

        cy.wait(10000)
    })

    it("Fill the address details", () => {
        cy.get('input#tbAddress1').clear().type("contact address")
        cy.get('input#tbCity').clear().type("Noida")
        cy.get('input#tbPostcode').clear().type("112233")
    })

    it("Enter card details ", () => {
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap).find('input[name="number"]').type("4242424242424242")

        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap).find('input[name="expiry"]').type("1234")

        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap).find('input[name="cvc"]').type("123")

        cy.wait(5000)
    })

    it("Make Payment", () => {
        cy.get(".confirm-btn >button[id='c-submit-me']").click()  // Crashing on clicking this button.
    })

    it("Verify the Thank you note", () => {
        cy.get(".thank-you >h2[class='payment-title']").should('exist').and('be.visible')
        cy.get(".thank-you >h2[class='payment-title']").should('contain', 'Thank you')
    })



})