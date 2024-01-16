describe('Login', () => {
  
    it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
        cy.get('#mat-input-0').type(`DjoleP`)
        cy.get('#mat-input-1').type(`Djordje123`)
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.wait(2000)
        cy.get('.mat-autocomplete-trigger').type(`HP2`)
        cy.get('.mat-option-text').click()
        cy.wait(2000)

        cy.get('.brand-title > .mat-focus-indicator').click()

        cy.wait(2000)
        cy.get('.mat-autocomplete-trigger').type(`Lisa Wingate`)
        cy.get('.mat-option-text').click()
    })
            })
        