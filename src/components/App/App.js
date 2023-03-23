import './App.css';
import React, {Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import FilterForm from '../FilterForm/FilterForm'
import movieData from '../testData';


class App extends Component {
  constructor() {
    super();
    this.state = movieData
  }
  
  render() {
    return (
      <main className="App">
        <header>
          <h1>Expired Avocados</h1>
        </header>
        <MovieContainer movies = {this.state.movies}/>
        <FilterForm />
      </main>
    );
  }
}

export default App;