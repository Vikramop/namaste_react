import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/constants';

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRes(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>

      {/* 
        No key(not Recomended) >>>> index >>>> unique id (Best Practice)
        */}

      <div className="res-container">
        {/* Instead of using loop, we can iterate using map  */}

        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
