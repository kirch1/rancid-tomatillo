import './FilterForm.css'
import React, {Component} from 'react'

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state) {
      this.props.filterMovies(this.state)
    }
  }

  render() {
    return (
      <footer>
        <form>
          <input type='text'
                 name='title'
                 placeholder='Title Search'
                 value={this.state.title}
                 onChange={event => this.handleChange(event)}>
          </input>
          <button>Clear All</button>
        </form>
      </footer>
    )
  }
}

export default FilterForm;
