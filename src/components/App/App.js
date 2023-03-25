import './App.css';
import React, {Component} from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FilterForm from '../FilterForm/FilterForm'
import movieData from '../testData';
import MovieDetails from '../MovieDetails/MovieDetails';
import logo from '../../assets/avocado.svg';

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
          <img src={logo} className='headerLogo'/>
          <h1>expired avocados</h1>
        </header>
        {this.state.selectedMovie ? <MovieDetails selectMovie={this.selectMovie}/> : <MoviesContainer movies={this.state.allMovies.movies} selectMovie={this.selectMovie}/> }
        {!this.state.selectedMovie && <FilterForm />}
      </main>
    );
  }
}

export default App;
