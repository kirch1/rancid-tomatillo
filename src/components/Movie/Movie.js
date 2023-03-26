import './Movie.css';

const Movie = ({movieDetails, selectMovie}) => {
  
  return (
    <div onClick={() => selectMovie(movieDetails.id)} 
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
