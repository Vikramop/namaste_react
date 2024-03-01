import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="food" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{locality} </p>
    </div>
  );
};

export default RestaurantCard;
