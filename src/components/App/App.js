import './App.css';
import React, {Component} from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FilterForm from '../FilterForm/FilterForm'
import MovieDetails from '../MovieDetails/MovieDetails';
import logo from '../../assets/avocado.svg';
import {fetchAllMovies} from '../../apiCalls';

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
    if(filters.title) {
      var preFiltered = this.state.allMovies.filter(movie => movie.title.includes(filters.title));
      if(preFiltered.length) {
        this.setState({
          filteredFilms: preFiltered,
          errorMessage: ''
        })
      }else {
        this.setState({errorMessage: 'No Search Results'})
      }
    }else {
      this.setState({errorMessage: ''})
      this.setState({filteredFilms: []})
    }
  }

  setError(message) {
    this.setState({errorMessage: message})
  }

  getMainComponent() {
    if(this.state.selectedMovie) {
      return <MovieDetails selectMovie={this.selectMovie} 
                           selectedMovieId = {this.state.selectedMovie}
                           setError={this.setError}/>
    }
    if(this.state.errorMessage === 'Network Error') {
      return <p className='errorMessage'>Network issues are the pits!</p>
    }
    if(this.state.errorMessage) {
      return <p className='errorMessage'>{this.state.errorMessage}</p>
    }
    return <MoviesContainer movies={this.state.filteredFilms.length ? this.state.filteredFilms : this.state.allMovies} 
                            selectMovie={this.selectMovie}/> 
  }
  
  render() {
    return (
      <main className="App">
        <header>
          <img src={logo} className='headerLogo'/>
          <h1>expired avocados</h1>
        </header>
        {this.getMainComponent()}
        {!this.state.selectedMovie && <FilterForm filterMovies={this.filterMovies}/>}
      </main>
    );
  }
}

export default App;
