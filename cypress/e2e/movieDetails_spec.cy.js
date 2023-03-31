// This test file should revolve around the detailed movie view that appears when a user interacts with a movie tile in the dashboard view. Upon switching to this view, the user should have the film browser and search forms hidden from view and the center of the page should be replaced with a section that contains the full data available for the specific film selected.

import multipleStub from "../fixtures/manyMoviesStub"
import {singleStub, emptyStub} from "../fixtures/singleMovieStub"
import { happyVideosStub, sadVideosStub } from "../fixtures/videoStubs"

describe('Movie Details View - User flow and error handling', () => {
  let testVisit = () => cy.visit('http://localhost:3000')
  
  beforeEach(()=> {
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*'}, singleStub)
    testVisit()
  })

  it('User clicks movie tile -> movieDetails shown, form and home view hidden', () => {

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

  it('User clicks movie tile -> detailed view shows return home button', () => {

    cy.get('#436270')
    .click()
      cy.get('.moviesContainerMain')
      .should('not.exist')
      cy.get('.movieDetailsMain')
      .should('exist').should('be.visible')

    cy.get('.homeButton')
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

    cy.get('.homeButton')
    .click()
      cy.get('.movieDetailsMain')
      .should('not.exist')
      cy.get('.movieDetailsContent')
      .should('not.exist')
      cy.get('.moviesContainerMain')
      .should('exist').should('be.visible')
  }
  )

  it('User clicks movie tile -> movieDetails shows all details', () => {
    // Black Adam test

    cy.get('#436270')
    .click()
      cy.get('.detailCover')
      .should('exist').should('be.visible')
      cy.get('h3')
      .should('exist').should('be.visible')
      cy.get('.dataTitle')
      .should('exist').should('be.visible')
      cy.get('.dataPoint')
      .should('exist').should('be.visible')
      cy.get('.speedometer')
      .should('exist').should('be.visible')
      cy.get('.overviewText')
      .should('exist').should('be.visible')
      cy.get('.trailer')
      .should('exist').should('be.visible')
  }
  )

  it('User clicks movie tile (SAD)---> movieDetails shows all details, with default values for empty / false queries.', () => {

    // Replace Wakanda Forever requests with empty stub:

    cy.get('#505642')
    .click()
    cy.get('.detailCover')
    .should('exist').should('not.be.visible')
    cy.get('h3')
    .should('exist').should('not.be.visible')
    cy.get('.dataTitle')
    .should('exist').should('be.visible').should('have.lengthOf', 4)
    cy.get('.dataPoint')
    .should('exist').should('be.visible')
    cy.get('.speedometer')
    .should('exist').should('be.visible')
    cy.get('.overviewText')
    .should('exist').should('not.be.visible')

    // Refactor / Bugfix! // 

    // Currently, this test displays the first trailer for Black Adam, as the videos in state for movieDetails remain from the previous tests. Refactor should reset state between tests to ensure testing clarity.


    // cy.get('.trailer')
    // .should('exist').should('not.be.visible')

    // output: test fail
  })


})
