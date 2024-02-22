import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resList?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="food" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{areaName} </p>
    </div>
  );
};

export default RestaurantCard;
