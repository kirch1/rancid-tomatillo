import './App.css';
import React, {Component} from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Error from '../../Error/Error';
import FilterForm from '../FilterForm/FilterForm'
import MovieDetails from '../MovieDetails/MovieDetails';
import getData from '../../apiCalls';
import {Switch, Route, Redirect} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      displayedMovies: [],
      errorMessage: ''
    };
  }

  componentDidMount() {
    getData('movies')
      .then(data => this.setState({allMovies: data.movies, displayedMovies: data.movies}))
      .catch(() => {
        this.setState({errorMessage: 'Network Error'})
      })
  }

  filterMovies = (filters) => {
    let output = this.state.allMovies;
    output = output.filter(movie => movie.title.includes(filters.title));
    output = output.filter(movie => movie.average_rating >= filters.ripeness[0] && movie.average_rating <= filters.ripeness[1]);
    this.setState({displayedMovies: output});
  }

  resetMovies = () => {
    if(this.state.displayedMovies !== this.state.allMovies) {
      this.setState({displayedMovies: this.state.allMovies})
    }
  }
  
  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route path="/movies/:movieID" render={({match}) => {
            return <MovieDetails selectedMovieId={match.params.movieID}/>
          }}/>
          <Route path='/error'>
            <Error errorMessage="Network Errors are the Pits!"/>
          </Route>
          <Route exact path="/">
            {this.state.errorMessage ? <Redirect to='/error'/> :
            <>
              <MoviesContainer movies={this.state.displayedMovies} resetMovies={this.resetMovies}/> 
              <FilterForm filterMovies={this.filterMovies}/>
            </>}
          </Route>
          <Route>
            <Redirect to='/error'/>
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
