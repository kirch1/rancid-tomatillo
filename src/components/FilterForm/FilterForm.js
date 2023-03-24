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
          <input placeholder = 'Search...'>
          
          </input>
        </form>
      </footer>
    )
  }
}

export default FilterForm;