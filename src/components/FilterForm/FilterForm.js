import './FilterForm.css'
import React, {Component} from 'react'

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {title: ''}
  }
  render() {
    return (
      <footer>
        <form>
          <input type='text'
                 placeholder='Title Search'>
          </input>
          <button>Clear All</button>
        </form>
      </footer>
    )
  }
}

export default FilterForm;
