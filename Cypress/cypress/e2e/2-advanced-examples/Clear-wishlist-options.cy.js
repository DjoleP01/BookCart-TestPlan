describe('Login', () => {
  
    it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
        cy.get('#mat-input-0').type(`DjoleP`)
        cy.get('#mat-input-1').type(`Djordje123`)
        cy.get('.mat-card-actions > .mat-focus-indicator').click()
        cy.get(':nth-child(1) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
        cy.wait(3000)
        cy.get(':nth-child(5) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
        cy.wait(3000)
        cy.get(':nth-child(7) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
        cy.wait(3000)
        cy.get(':nth-child(9) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
        cy.wait(3000)
        cy.get(':nth-child(10) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
        cy.wait(3000)
        cy.get('.mat-icon-button.ng-star-inserted > .mat-button-wrapper > .mat-icon').click()
        cy.wait(2000)
        cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click()
    })
            })
  