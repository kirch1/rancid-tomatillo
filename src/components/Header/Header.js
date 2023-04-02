import {Link} from "react-router-dom";
import logo from '../../assets/avocado.svg';
import './Header.css'
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return(
    <header>
      {location.pathname !== '/' && <Link to="/"> <button className='homeButton'>Home</button> </Link>}
      <div className="logo">
        <img src={logo} className='headerLogo' alt="header logo"/>
        <h1>expired avocados</h1>
      </div>
      {location.pathname !== '/' && <div className="placeholder"></div>}
    </header>
  )
}

export default Header;
