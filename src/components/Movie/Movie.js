import './Movie.css';
import {NavLink} from "react-router-dom";

const Movie = ({movieDetails}) => {
  return (
    <NavLink to={'/movies/' + movieDetails.id} className='movieLink'>
      <div className="movieCard" id={movieDetails.id}>
        <img src={movieDetails['poster_path']} alt={movieDetails.title}/>
        <div className='movieFooter'>
          <h2>{movieDetails.title}</h2>
          <span className='movieRating'>{movieDetails['average_rating']} 🥑</span>
        </div>
      </div>
    </NavLink>
  )
}

export default Movie;
