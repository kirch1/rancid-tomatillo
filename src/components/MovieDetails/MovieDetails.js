import { Component } from 'react';
import { fetchMovieDetails } from '../../apiCalls';
import ReactSpeedometer from 'react-d3-speedometer'
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
      errorMessage: ''
    };
  }

  componentDidMount() {
    fetchMovieDetails(this.props.selectedMovieId)
      .then(data => this.setState({details: data.movie}))
      .catch(() => {
        this.setState({errorMessage: 'AvocadOh No! Cant Find Movie Details'})
      })
  }

  render() {
    const USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0});
    return(
      <section className='movieDetailsMain'>
        {this.state.errorMessage ? 
        <p className='errorMessage'>{this.state.errorMessage}</p> : 
        <div className='movieDetailsContent'>
          <img className='detailCover' src={this.state.details['poster_path']} alt={this.state.details.title}/>
          <div className='moreInfo'>
            <div className='infoFlex'>
              <div>
                <h3>{this.state.details.title}</h3>
                <p className='dataTitle'>Released</p>
                <p className='dataPoint'>{this.state.details['release_date']}</p>
                <p className='dataTitle'>Genres</p>
                <div className='genres'>
                  {this.state.details.genres && this.state.details.genres.map(genre => <span className='dataGenre'>{genre} </span>)}
                </div>
                <p className='dataTitle'>Budget</p>
                <p className='dataPoint'>{USDollar.format(this.state.details.budget)}</p>
                <p className='dataTitle'>Revenue</p>
                <p className='dataPoint'>{USDollar.format(this.state.details.revenue)}</p>
                <p className='dataTitle'>Runtime</p>
                <p className='dataPoint'>{this.state.details.runtime} minutes</p>
              </div>
              <div>
                <ReactSpeedometer value={this.state.details['average_rating']} 
                                  currentValueText={`Ripeness: ${this.state.details['average_rating']}`}
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
            <p className='overviewText'>{this.state.details.overview}</p>
          </div>
        </div>}
      </section>
    )
  }
}

export default MovieDetails;
