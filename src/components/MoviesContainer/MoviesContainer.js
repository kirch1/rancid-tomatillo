import Movie from '../Movie/Movie'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
  const movies = props.movies.map(movie => {
    return (
      <Movie key={movie.id} movieDetails={movie} selectMovie={props.selectMovie}/>
    )
  })

  return (
    <section>
      {movies}
    </section>
  )
}

export default MoviesContainer;
