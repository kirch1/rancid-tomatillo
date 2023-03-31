const getData = (path) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}

export default getData;
