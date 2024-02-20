import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
 * Our App Structure *

* Header
* - Logo
* - Nav items
* Body
* - RestaurantContainer
*  - RestaurantCard
*   - Image
*   - Name of the Restaurant,cuisine, starts, etc
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
        alt="food"
      />
      <h3>{props.resName}</h3>
      <h4>{props.resCuisine}</h4>
      <p>Starting Time: 9 AM | Closing Time: 10 PM</p>
      <p>4.4 stars</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        <RestaurantCard
          resName="Meghan foods"
          resCuisine="Indian, South-Indian, Indo-Chinese"
        />
        <RestaurantCard resName="Roti Mane" resCuisine="Roti, Dal, Rice" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

// 1:15:00
