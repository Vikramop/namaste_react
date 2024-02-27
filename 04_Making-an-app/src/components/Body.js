import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/constants';

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999'
    );

    const json = await data.json();

    console.log(json.data.restaurants);
  };

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
