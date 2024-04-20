import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo?.cards[2]?.card?.card?.info?.name);

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log(itemCards);

  return (
    <div>
      {/* <h1>heelo </h1> */}
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{areaName}</h3>

      <h2>Menu Items</h2>
      {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name} - {' ₹'}
          {item?.card?.info?.price / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
