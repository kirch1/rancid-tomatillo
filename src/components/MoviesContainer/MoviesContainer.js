import Error from '../../Error/Error'
import Movie from '../Movie/Movie'
import PropTypes from 'prop-types'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
  
  const movies = props.movies.map(movie => {
    return <Movie key={movie.id} movieDetails={movie} resetMovies={props.resetMovies}/>
  })

  return (
    <div className='moviesContainerMain'>
      {props.movies.length ? 
      <section className='moviesContainer'> {movies} </section> : 
      <Error errorMessage='No Movies To Show'/>}
    </div>
  )
}

export default MoviesContainer;

MoviesContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  resetMovies: PropTypes.func.isRequired
}