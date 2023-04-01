import './Movie.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

const Movie = ({movieDetails, resetMovies}) => {

  return (
    <Link to={'/movies/' + movieDetails.id} className='movieLink' onClick={resetMovies}>
      <div className="movieCard" id={movieDetails.id}>
        <img src={movieDetails['poster_path']} alt={movieDetails.title}/>
        <div className='movieFooter'>
          <h2>{movieDetails.title}</h2>
          <span className='movieRating'>{movieDetails.average_rating} 🥑</span>
        </div>
      </div>
    </Link>
  )
}

export default Movie;

Movie.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired
  })
}