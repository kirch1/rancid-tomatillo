// This test file should revolve around the detailed movie view that appears when a user interacts with a movie tile in the dashboard view. Upon switching to this view, the user should have the film browser and search forms hidden from view and the center of the page should be replaced with a section that contains the full data available for the specific film selected.

import multipleStub from "../fixtures/manyMoviesStub"
import singleStub from "../fixtures/singleMovieStub"

describe('Movie Details View - User flow and error handling', () => {
  let testVisit = () => cy.visit('http://localhost:3000')
  
  beforeEach(()=> {
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*'}, singleStub)
    testVisit()
  })

  it('When a user clicks a movie tile, they are shown further details, while the film browser and search form are hidden', () => {

    cy.get('#436270')
    .click()
      cy.get('.moviesContainerMain')
      .should('not.exist')
      cy.get('input')
      .should('not.exist')

    cy.get('.movieDetailsMain')
    .should('exist')
    cy.get('.movieDetailsContent')
    .should('exist').should('be.visible')

  }
  )

  it('When a user clicks a movie tile, the detailed view has a button that enables them to return to the default dashboard', () => {

    cy.get('#436270')
    .click()
      cy.get('.moviesContainerMain')
      .should('not.exist')
      cy.get('.movieDetailsMain')
      .should('exist').should('be.visible')

    cy.get('.detailsButton')
    .click()
      cy.get('.moviesContainerMain')
      .should('exist').should('be.visible')
      cy.get('.movieDetailsMain')
      .should('not.exist')

    cy.get('#505642')
    .click()
      cy.get('.movieDetailsMain')
      .should('exist').should('be.visible')
      .get('.movieDetailsContent')
      .should('exist').should('be.visible')
      cy.get('.moviesContainerMain')
      .should('not.exist')

    cy.get('.detailsButton')
    .click()
      cy.get('.movieDetailsMain')
      .should('not.exist')
      cy.get('.movieDetailsContent')
      .should('not.exist')
      cy.get('.moviesContainerMain')
      .should('exist').should('be.visible')
  }
  )

  it('', () => {
  }
  )
})