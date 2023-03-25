import Movie from '../Movie/Movie'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
  const movies = props.movies.map(movie => {
    return (
      <Movie key={movie.id} movieDetails={movie} selectMovie={props.selectMovie}/>
    )
  })

  return (
    <div className='moviesContainerMain'>
      <section className='moviesContainer'>
        {movies}
      </section>
    </div>
  )
}

export default MoviesContainer;
