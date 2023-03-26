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
      selectedMovie: 0
    };
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data => this.setState({allMovies: data.movies}))
      .catch(error => console.log(error))
  }

  selectMovie = id => {
    this.setState({selectedMovie: id});
  }

  filterMovies = (filters) => {
    if(filters.title) {
      this.setState({
        filteredFilms: this.state.allMovies.filter(movie => movie.title.includes(filters.title))
      })
    }else {
      this.setState({filteredFilms: []})
    }
  }
  
  render() {
    return (
      <main className="App">
        <header>
          <img src={logo} className='headerLogo'/>
          <h1>expired avocados</h1>
        </header>
        {this.state.selectedMovie ?
          <MovieDetails selectMovie={this.selectMovie} selectedMovieId = {this.state.selectedMovie}/> :
          <MoviesContainer movies={this.state.filteredFilms.length ? this.state.filteredFilms : this.state.allMovies} selectMovie={this.selectMovie}/> 
        }
        {!this.state.selectedMovie && <FilterForm filterMovies={this.filterMovies}/>}
      </main>
    );
  }
}

export default App;
