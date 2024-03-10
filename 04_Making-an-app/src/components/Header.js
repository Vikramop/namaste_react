import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [btnName, setBtnName] = useState('Log In');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {' '}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              btnName === 'Log In'
                ? setBtnName('Logout')
                : setBtnName('Log In');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
