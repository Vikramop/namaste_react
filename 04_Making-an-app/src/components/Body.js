import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/constants';

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
export default Body;
