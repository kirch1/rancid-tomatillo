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

  cy.get('input[placeholder="Title Search"]')
    .should('exist')
    .should('have.value', '')
  })

  it('Form should feature a "ripeness filter" that enables a user to refine search further based off of rating', () => {

    cy.get('.ripenessParent')
      .should('exist').should('be.visible')

    cy.get('.ripenessFilter')
      .should('exist')
      .should('be.visible')
  })
  
  it('Form should allow user to enter letters to filter movies. It should update its own state as the user types', () => {

    cy.get('input[name="title"]')
      .type('W')
        .should('have.value', 'W')
      .type('{backspace}')
        .should('have.value', '')
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

  it('SAD - If search returns no results, the user should be presented with an error message to inform them.', () => {

    cy.get('input[name="title"]')
    .type('W')
    .should('have.value', 'W')
    .type('o')
    .should('have.value', 'Wo')
    .type('o')
    .should('have.value', 'Woo')

    cy.get('.errorMessage')
    .should('exist').should('be.visible')
    .contains('No Movies To Show')
  }
  )
})