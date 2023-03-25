import { Component } from "react";
import testDetails from "../testDetails";
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = testDetails.movie;
  }

  componentDidMount() {
    console.log('details mounted');
  }

  render() {
    const USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
    return(
      <section className="movieDetailsMain">
        <div className="detailsHeader">
          <button onClick={() => this.props.selectMovie(0)}>&larr; Return</button>
        </div>
        <div className="movieDetailsContent">
          <img className='detailCover' src={this.state['poster_path']} alt={this.state.title}/>
          <div className='moreInfo'>
            <h3>{this.state.title}</h3>
            <p>Average Rating: {this.state['average_rating']}  🥑</p>
            <p>Release Date: {this.state['release_date']}</p>
            <p>Genre: {this.state.genres[0]}</p>
            <p>Budget: {USDollar.format(this.state.budget)}</p>
            <p>Revenue: {USDollar.format(this.state.revenue)}</p>
            <p>Runtime: {this.state.runtime} minutes</p>
            <p>{this.state.overview}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default MovieDetails;
