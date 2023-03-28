// This test file will be relevant to the user flows that involve the filtering form that we have at the bottom of our page. This form should enable a user to refine their browsing, and should be visible until a user interacts with a movie card and switches their view to see further specific details about  that one film.

// This form should become hidden in that detailed view, and return alongside the dashboard view upon returning to it.

import multipleStub from "../fixtures/manyMoviesStub"


describe('Filter Form - User flow and error handling', () => {
  let testVisit = () => cy.visit('http://localhost:3000')

  beforeEach(()=> {
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    testVisit()
  })

  it('Form should be visible upon page arrival. It should contain a blank input with placeholder text indicating purpose', () => {

  cy.get('form')
  .should('exist')
  .should('be.visible')
  .should('have.value', '')

  cy.get('input[placeholder="Title Search"]')
  .should('exist')

  // Router URL check here, once we get to that part of refactoring
  })
  
  it('Form should allow user to enter letters to filter movies. It should update its own state as the user types', () => {

    cy.get('input[name="title"]')
    .type('W')
    .should('have.value', 'W')
    .type('{backspace}')
    .should('have.value', '')

    cy.get('input[name="title"]')
    .type('B')
    .should('have.value', 'B')
    .type('l')
    .should('have.value', 'Bl')
    .type('a')
    .should('have.value', 'Bla')
  }

  )

  it('Form should use user input to filter the movie browsing selection on display', () => {


    cy.get('input[name="title"]')
    .type('W')
    .should('have.value', 'W')
    .type('o')
    .should('have.value', 'Wo')

    cy.get('section')
    .should('exist')
    .get('#724495')
    .should('exist').should('be.visible')

    cy.get('section')
    .should('exist')
    .get('#877269')
    .should('exist').should('be.visible')
  }
  )

  it('', () => {
  }
  )

  it('', () => {
  }
  )

  it('', () => {
  }
  )

})