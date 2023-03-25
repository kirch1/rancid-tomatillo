import './App.css';
import React, {Component} from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FilterForm from '../FilterForm/FilterForm'
import movieData from '../testData';
import MovieDetails from '../MovieDetails/MovieDetails';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData,
      selectedMovie: 0
    };
  }

  selectMovie = id => {
    this.setState({selectedMovie: id});
  }
  
  render() {
    return (
      <main className="App">
        <header>
          <h1>Expired Avocados</h1>
        </header>
        {this.state.selectedMovie ? <MovieDetails selectMovie={this.selectMovie}/> : <MoviesContainer movies={this.state.allMovies.movies} selectMovie={this.selectMovie}/> }
        <FilterForm />
      </main>
    );
  }
}

export default App;
