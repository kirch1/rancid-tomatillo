import './App.css';
import React, {Component} from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
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
        <MoviesContainer movies = {this.state.movies}/>
        <FilterForm />
      </main>
    );
  }
}

export default App;
