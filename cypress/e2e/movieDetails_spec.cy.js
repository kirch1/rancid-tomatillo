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
      .get('.moviesContainerMain')
        .should('not.exist')
      .get('input')
        .should('not.exist')

    cy.get('.movieDetailsMain')
      .should('exist')
    .get('.movieDetailsContent')
      .should('exist').should('be.visible')

  }
  )

  it('When a user clicks a movie tile, details view has a button that enables them to return to the default dashboard', () => {

    cy.get('#436270')
    .click()
      .get('.moviesContainerMain')
        .should('not.exist')
      .get('.movieDetailsMain')
        .should('exist').should('be.visible')

    cy.get('.homeButton')
    .click()
      .get('.moviesContainerMain')
        .should('exist').should('be.visible')
      .get('.movieDetailsMain')
        .should('not.exist')

    cy.get('#505642')
    .click()
      .get('.movieDetailsMain')
        .should('exist').should('be.visible')
      .get('.movieDetailsContent')
        .should('exist').should('be.visible')
      .get('.moviesContainerMain')
        .should('not.exist')

    cy.get('.homeButton')
    .click()
      .get('.movieDetailsMain')
        .should('not.exist')
      .get('.movieDetailsContent')
        .should('not.exist')
      .get('.moviesContainerMain')
        .should('exist').should('be.visible')
  }
  )

  it('When a user clicks a movie title, they are presented with many fields of information and media to view', () => {

    cy.get('#436270')
    .click()
      .get('.detailCover')
        .should('exist').should('be.visible')
      .get('.dataMovieTitle')
        .should('exist').should('be.visible').contains('Black Adam')
      .get('.tagline')
        .should('exist').should('be.visible').contains('a hero')
      .get('.dataTitle')
        .should('exist').should('be.visible').should('have.length', 5)
      .get('.dataPoint')
        .should('exist').should('be.visible').should('have.length', 4)
      .get('.meterDiv')
        .should('exist').should('be.visible')
        .get('.current-value').contains('Ripeness: 4')
      .get('.overviewText')
        .should('exist').should('be.visible').contains('—and imprisoned just as quickly—')
      .get('.trailer')
        .should('exist').should('be.visible')
  })

  it('When a user clicks a movie tile, the URL is updated to reflect the unique ID of that title', () => {
    cy.get('#505642')
      .click()

    cy.url()
      .should('include', '/movies/505642')
  })

  it('SAD - If a user navigates to a URL that does our app cannot resolve to a movie, the user is presented with a Network Error message', ()=> {

    cy.visit('http://localhost:3000/movies/4362701')

    cy.get('.errorMessage')
      .should('exist').should('be.visible').contains('Network Errors are the Pits!')
  })
})
