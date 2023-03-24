import './Movie.css'

const Movie = ({movieDetails}) => {
  return (
    <div className="movieCard" id={movieDetails.id}>
      <img src={movieDetails['poster_path']}/>
      <div className='movieFooter'>
        <h2>{movieDetails.title}</h2>
        <span>{movieDetails['average_rating'].toFixed(1)} 🥑</span>
      </div>
    </div>
  )
}

export default Movie;
