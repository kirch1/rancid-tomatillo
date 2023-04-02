// This test file should be relevant to the user flows associated with general browsing. Checking for a successful page visit, then title display, form display, and rendering multiple routes for our mainComponent: 
// allMovies, filteredFilms, selectedMovie, or errorMessage state of App will dictate content

// Changes upon form change and switching to movieDetails view, so the user flows to and from each view will need to be tested.
import multipleStub from "../fixtures/manyMoviesStub"


describe('User dashboard - User flow, view switching, and error display', () => {
  let testVisit = () => cy.visit('http://localhost:3000')

  beforeEach(()=> {
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    testVisit()
  })

  it('User should be able to visit the page and see title upon arrival', () => {

    cy.get('h1')
      .should('exist')
      .should('be.visible')
      .contains('expired avocados')
  })

  it('User should be shown the search form at the bottom of the page upon arrival', () => {

    cy.get('form')
      .should('exist')
      .should('be.visible')
      .should('have.value', '')
  })

  it('User should have rating filter bar (ripeness meter) visible upon arrival', () => {

    cy.get('.ripenessFilter')
      .should('exist').should('be.visible')
    .get('.filterLabel')
      .contains('Ripeness:')
  })

  it('User should see an unfiltered selection of movies upon arrival', () => {

    cy.get('section')
      .should('exist')
    .get('#436270')
      .should('exist').should('be.visible')
    .find('img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    .get('#724495')
      .should('exist').should('be.visible')
    .get('#1013860')
      .should('exist').should('be.visible')
    .get('#505642')
      .should('exist').should('be.visible')
  })

  it('SAD - User should see an unfiltered selection of movies upon arrival, but there is an error server side', () => {

  }
  )

})