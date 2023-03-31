import { Component } from 'react';
import getData from '../../apiCalls';
import ReactSpeedometer from 'react-d3-speedometer'
import './MovieDetails.css'
import {Redirect} from 'react-router-dom';
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
      videos: [],
      errorMessage: ''
    };
  }

  componentDidMount() {
    Promise.all([getData(`movies/${this.props.selectedMovieId}`), getData(`movies/${this.props.selectedMovieId}/videos`)])
      .then(data => {
        this.setState({details: data[0].movie, videos: data[1].videos});
      })
      .catch(() => this.setState({errorMessage: 'Details Error'}));
  }

  render() {
    const USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0});
    if(this.state.errorMessage){
      return <Redirect to='/error'/>
    }
    const bgImage = {backgroundImage: `linear-gradient(to bottom, #e1e88264 0%, #6a9248 100%), url("${this.state.details.backdrop_path}")`} 
    return(
      <section className='movieDetailsMain' style={bgImage}>
        <div className='movieDetailsContent'>
          <img className='detailCover' src={this.state.details.poster_path} alt={this.state.details.title}/>
          <div className='moreInfo'>
            <div className='infoFlex'>
              <div>
                <h3>{this.state.details.title}</h3>
                <p className='dataTitle'>Released</p>
                <p className='dataPoint'>{this.state.details.release_date}</p>
                <p className='dataTitle'>Genres</p>
                <div className='genres'>
                  {this.state.details.genres && this.state.details.genres.map(genre => <span key={genre} className='dataGenre'>{genre} </span>)}
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
                                  currentValueText={`Ripeness: ${this.state.details.average_rating}`}
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
            {this.state.videos.length &&
            <iframe  className='trailer'
                     src={"https://www.youtube.com/embed/" + this.state.videos[0].key}
                     title="YouTube video player" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowFullScreen></iframe>}
          </div>
        </div>
      </section>
    )
  }
}

export default MovieDetails;
