import { Component } from 'react';
import { fetchMovieDetails } from '../../apiCalls';
import ReactSpeedometer from 'react-d3-speedometer'
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetchMovieDetails(this.props.selectedMovieId)
      .then(data => this.setState(data.movie))
      .catch()
  }

  render() {
    const USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0});
    return(
      <section className='movieDetailsMain'>
          <button className='detailsButton' onClick={() => this.props.selectMovie(0)}>&larr; Return</button>
        <div className='movieDetailsContent'>
          <img className='detailCover' src={this.state['poster_path']} alt={this.state.title}/>
          <div className='moreInfo'>
            <div className='infoFlex'>
              <div>
                <h3>{this.state.title}</h3>
                <p className='dataTitle'>Released</p>
                <p className='dataPoint'>{this.state['release_date']}</p>
                <p className='dataTitle'>Genres</p>
                <div className='genres'>
                  {this.state.genres && this.state.genres.map(genre => <span className='dataGenre'>{genre} </span>)}
                </div>
                <p className='dataTitle'>Budget</p>
                <p className='dataPoint'>{USDollar.format(this.state.budget)}</p>
                <p className='dataTitle'>Revenue</p>
                <p className='dataPoint'>{USDollar.format(this.state.revenue)}</p>
                <p className='dataTitle'>Runtime</p>
                <p className='dataPoint'>{this.state.runtime} minutes</p>
              </div>
              <div>
                <ReactSpeedometer value={this.state['average_rating']} 
                                  currentValueText={`Ripeness: ${this.state['average_rating']}`}
                                  maxValue={10}
                                  segments={4}
                                  segmentColors={['#594640', '#93C832', '#93C832', '#539320']}
                                  needleColor='#594640'
                                  width={210}
                                  height={130}
                                  ringWidth={24}
                                  needleHeightRatio={0.7}
                                  customSegmentLabels={[
                                    {
                                      text: 'EXPIRED',
                                      fontSize: '10px',                 
                                      position: 'INSIDE',
                                      color: '#FFFFFF',
                                    },
                                    {},{},
                                    {
                                      text: 'RIPE',
                                      fontSize: '10px',
                                      position: 'INSIDE',
                                      color: '#FFFFFF',
                                    }
                                  ]}/>
              </div>
            </div>
            <p className='overviewText'>{this.state.overview}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default MovieDetails;
