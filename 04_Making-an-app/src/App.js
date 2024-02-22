import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      {/* 
      No key(not Recomended) >>>> index >>>> unique id (Best Practice)
      */}

      <div className="res-container">
        {/* Instead of using loop, we can iterate using map  */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
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

// 1:19:30
