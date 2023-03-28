import './FilterForm.css'
import React, {Component} from 'react'

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
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
    this.setState({title: ''});
  }

  render() {
    return (
      <footer>
        <form onSubmit={e => { e.preventDefault(); }}>
          <input type='text'
                 name='title'
                 placeholder='Title Search'
                 value={this.state.title}
                 onKeyDown={event => event.key === 'Enter' && event.preventDefault()}
                 onChange={event => this.handleChange(event)}>
          </input>
          <button onClick={event => this.clearFilters(event)}>Clear All</button>
        </form>
      </footer>
    )
  }
}

export default FilterForm;
