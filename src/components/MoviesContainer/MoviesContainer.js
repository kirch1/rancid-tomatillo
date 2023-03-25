import Movie from '../Movie/Movie'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
  console.log('ln 5 moviecontainer', props.movies)
  const movies = props.movies.map(movie => {
    return (
      <Movie key= {movie.id} movieDetails={movie} />
    )
  })

  return (
    <section>
      {movies}
    </section>
  )
}

export default MoviesContainer;