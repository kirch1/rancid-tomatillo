import './App.css';
import React, {Component} from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FilterForm from '../FilterForm/FilterForm'
import MovieDetails from '../MovieDetails/MovieDetails';
import {fetchAllMovies} from '../../apiCalls';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredFilms: [],
      selectedMovie: 0,
      errorMessage: ''
    };
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data => this.setState({allMovies: data.movies}))
      .catch(() => {
        this.setState({errorMessage: 'Network Error'})
      })
  }

  selectMovie = id => {
    this.setState({selectedMovie: id});
  }

  filterMovies = (filters) => {
    console.log('filters:', filters)
    if(filters.title) {
      var preFiltered = this.state.allMovies.filter(movie => movie.title.includes(filters.title));
      if(preFiltered.length) {
        this.setState({
          filteredFilms: preFiltered,
          errorMessage: ''
        })
      }else {
        this.setState({errorMessage: 'No Search Results'})
        this.setState({filteredFilms: []})
      }
    }else {
      this.setState({errorMessage: ''})
      this.setState({filteredFilms: []})
    }
  }

  // getMainComponent() {
  //   if(this.state.selectedMovie) {
  //     return <MovieDetails selectMovie={this.selectMovie} 
  //                          selectedMovieId = {this.state.selectedMovie}
  //                          setError={this.setError}/>
  //   }
  //   if(this.state.errorMessage === 'Network Error') {
  //     return <p className='errorMessage'>Network issues are the pits!</p>
  //   }
  //   if(this.state.errorMessage) {
  //     return <p className='errorMessage'>{this.state.errorMessage}</p>
  //   }
  //   return <MoviesContainer movies={this.state.filteredFilms.length ? this.state.filteredFilms : this.state.allMovies}selectMovie={this.selectMovie}/> 
  // }
  


  render() {
    return (
      <main className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/details">
              <MovieDetails selectMovie={this.selectMovie} selectedMovieId = {this.state.selectedMovie}/>
            </Route>
            <Route path="/">
              <MoviesContainer movies={this.state.filteredFilms.length ? this.state.filteredFilms : this.state.allMovies} selectMovie={this.selectMovie}/> 
              <FilterForm filterMovies={this.filterMovies}/>
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
