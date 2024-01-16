describe('Login', () => {
  
    it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
        cy.get('#mat-input-0').type(`DjoleP`)
        cy.get('#mat-input-1').type(`Djordje123`)
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.get(':nth-child(2) > app-book-card > .mat-card > :nth-child(2) > app-addtocart > .mat-focus-indicator').click()
        cy.get(':nth-child(2) > .mat-button-wrapper > .mat-icon').click()
        cy.get(':nth-child(6) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    })
            })
