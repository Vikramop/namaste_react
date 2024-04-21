import { useState, useEffect } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { resList } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilterdRes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

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

  if (onlineStatus === false)
    return <h1>Looks like you have no internet connection.</h1>;

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-20">
      <div className="my-6 flex gap-12 items-center justify-center">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border-2 border-black mr-6 "
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterdRes(filteredRes);
            }}
            className="bg-black rounded-md px-6 py-2 text-white"
          >
            search
          </button>
        </div>
        <button
          className="bg-black px-6 py-2 rounded-md text-white"
          onClick={() => {
            const filteredList = listOfRes.filter(
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

      <div className="flex flex-wrap gap-5 justify-center">
        {/* Instead of using loop, we can iterate using map  */}

        {filteredRes?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantWithPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
