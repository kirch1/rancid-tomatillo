import {Link} from "react-router-dom";
import logo from '../../assets/avocado.svg';
import './Header.css'

const Header = () => {
  return(
    <header>
      <Link to="/"> <button className='homeButton'>All Movies</button> </Link>
      <img src={logo} className='headerLogo'/>
      <h1>expired avocados</h1>
    </header>
  )
}

export default Header;
