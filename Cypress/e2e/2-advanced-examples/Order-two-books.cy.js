describe('Login', () => {
  
    it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
        cy.get('#mat-input-0').type(`DjoleP`)
        cy.get('#mat-input-1').type(`Djordje123`)
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.get(':nth-child(6) > .mat-list-item-content').click()
       // cy.get('.mat-slider-ticks')
        //ubaciti price slide filter
        //cy.get('.mat-slider-thumb').invoke('val', 50).trigger('input');
        cy.get(':nth-child(4) > app-book-card > .mat-card > :nth-child(2) > app-addtocart > .mat-focus-indicator').click()
        cy.get(':nth-child(8) > app-book-card > .mat-card > :nth-child(2) > app-addtocart > .mat-focus-indicator').click()
        cy.get(':nth-child(2) > .mat-button-wrapper > .mat-icon').click()
        cy.get('.table > tr > .mat-card-content > :nth-child(6) > .mat-focus-indicator').click()
        cy.get('.mat-card-actions > .mat-primary').click()
        cy.get('#mat-input-2').type(`test`)
        cy.get('#mat-input-3').type(`test`)
        cy.get('#mat-input-4').type(`test`)
        cy.get('#mat-input-5').type(`123456`)
        cy.get('#mat-input-6').type(`test`)
        cy.get('.mat-card-actions > .mat-primary').click()
            cy.wait(3000),
            cy.get('.mat-snack-bar-container').should(`contain`, `Order placed successfully!!!`)
    })
            })
  