import React, {Component} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './FilterForm.css'

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      ripeness: [1, 10]
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state) {
      this.props.filterMovies(this.state);
    }
  }

  clearFilters = (event) => {
    event.preventDefault();
    this.setState({title: '', ripeness: [1, 10]});
  }
  
  render() {
    return (
      <footer>
        <form onSubmit={e => { e.preventDefault(); }}>
          <div className='ripenessParent'>
            <span className='filterLabel'>Ripeness:</span>
            <Slider
              className='ripenessFilter'
              range
              min={1}
              max={10}
              marks={{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}}
              value={this.state.ripeness}
              onChange={newValue => this.setState({ripeness: newValue})}
              dots
              trackStyle={[{backgroundColor:'#539320'}]}
              railStyle={{backgroundColor:'white'}}
              dotStyle={{backgroundColor:'white', borderColor:'transparent'}}
              activeDotStyle={{backgroundColor:'#539320', borderColor:'transparent'}}
              handleStyle={{backgroundColor:'#539320', borderColor:'#539320'}}
            />
          </div>
          <input type='text'
                 name='title'
                 placeholder='Title Search'
                 value={this.state.title}
                 onKeyDown={event => event.key === 'Enter' && event.preventDefault()}
                 onChange={event => this.handleChange(event)}>
          </input>
          <button className='clearButton' onClick={event => this.clearFilters(event)}>Clear All</button>
        </form>
      </footer>
    )
  }
}

export default FilterForm;
