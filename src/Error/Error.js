import './Error.css'
import PropTypes from 'prop-types'

const Error = ({errorMessage}) => {
  return(
    <p className='errorMessage'>{errorMessage}</p>
  )
}

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired
}