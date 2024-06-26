import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Log In');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-6 shadow-lg">
      <div className="w-56 p-2">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items flex">
        <ul className="flex  gap-10">
          <li>Online Staus: {onlineStatus ? '🍏' : '🍎'}</li>
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
          <li>
            {' '}
            <Link to="/grocery">Grocery</Link>
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
