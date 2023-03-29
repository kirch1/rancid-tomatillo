const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((res) => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}

const fetchMovieDetails = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}

const fetchMovieVideos = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then((res) => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}

export {fetchAllMovies, fetchMovieDetails, fetchMovieVideos};
