import './Movie.css'

const Movie = ({movieDetails}) => {
  console.log(movieDetails);
  return (
    <div className ="movieCard" id ={movieDetails.id}>
      <img src={movieDetails['poster_path']}/>
      <h2>{movieDetails.title}</h2>
      <span>{movieDetails['average_rating'].toFixed(1)}</span>
    </div>
  )
}









export default Movie;