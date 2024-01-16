describe('Login', () => {
  
    it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
        cy.get('#mat-input-0').type(`DjoleP`)
        cy.get('#mat-input-1').type(`Djordje123`)
        cy.get('.mat-card-actions > .mat-focus-indicator').click()

        cy.get('.mat-button-wrapper > :nth-child(2)').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()

    })
            })
  