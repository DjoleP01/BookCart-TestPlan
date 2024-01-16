describe('Login', () => {
  
    it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
        cy.get('#mat-input-0').type(`Djole`)
        cy.get('#mat-input-1').type(`Djordje12`)
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
    })
            })
  