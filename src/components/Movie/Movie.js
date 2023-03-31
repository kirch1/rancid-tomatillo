import './Movie.css';
import {Link} from "react-router-dom";

const Movie = ({movieDetails, resetMovies}) => {

  return (
    <Link to={'/movies/' + movieDetails.id} className='movieLink' onClick={resetMovies}>
      <div className="movieCard" id={movieDetails.id}>
        <img src={movieDetails['poster_path']} alt={movieDetails.title}/>
        <div className='movieFooter'>
          <h2>{movieDetails.title}</h2>
          <span className='movieRating'>{movieDetails['average_rating']} 🥑</span>
        </div>
      </div>
    </Link>
  )
}

export default Movie;
