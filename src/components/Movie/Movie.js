import './Movie.css';
import {Link, useHistory} from "react-router-dom";


const Movie = ({movieDetails, selectMovie}) => {
  const history = useHistory()
  const movieSelect = () => {
    selectMovie(movieDetails.id)
    history.push('/details')
  }
  return (
    <div onClick={movieSelect}
         className="movieCard"
         id={movieDetails.id}>
      <img src={movieDetails['poster_path']} alt={movieDetails.title}/>
      <div className='movieFooter'>
        <h2>{movieDetails.title}</h2>
        <span className='movieRating'>{movieDetails['average_rating'].toFixed(1)} 🥑</span>
      </div>
    </div>

  )
}

export default Movie;
