import { Component } from "react";
import testDetails from "../testDetails";
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = testDetails.movie;
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return(
      <section>
        <img src={this.state['poster_path']}/>
        <div className="moreInfo">
          <p>{this.state.overview}</p>
          <p>{this.state['average_rating']}</p>
          <p>{this.state.genres[0]}</p>
          <p>{this.state.tagline}</p>
          <p>{this.state.overview}</p>
        </div>
      </section>
    )
  }
}

export default MovieDetails;
