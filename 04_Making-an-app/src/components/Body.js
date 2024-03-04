import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/constants';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilterdRes] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999'
      // 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    console.log(json);
    setListOfRes(
      json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    setFilterdRes(
      json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    console.log(
      json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  // Conditional Rendering- rendering according to condition
  // if (listOfRes?.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterdRes(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes?.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRes(filteredList);
            // console.log(filteredList);
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

        {filteredRes?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
