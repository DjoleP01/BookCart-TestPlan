describe('Login', () => {
  
  it('Login with correct username and password', () => {
cy.visit (`https://bookcart.azurewebsites.net`)
cy.url().should('include', 'bookcart.azurewebsites.net');
cy.get(':nth-child(3) > .ng-star-inserted').click()
      cy.get('#mat-input-0').type(`DjoleP`)
      cy.get('#mat-input-1').type(`Djordje123`)
      cy.get('.mat-card-actions > .mat-focus-indicator').click()

      cy.get(':nth-child(1) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > app-book-card > .mat-card > .image-card > .favourite > app-addtowishlist > .material-icons').click()
      cy.wait(2000)
      //wishlist
      cy.get('.mat-icon-button.ng-star-inserted > .mat-button-wrapper > .mat-icon').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > .mat-card-content > :nth-child(5) > app-addtowishlist > .mat-focus-indicator').click()
cy.wait(2000)
cy.get('app-addtocart > .mat-focus-indicator').click()
cy.wait(2000)
cy.get('.link-active > .mat-button-wrapper > .mat-icon').click()
  })
          })
