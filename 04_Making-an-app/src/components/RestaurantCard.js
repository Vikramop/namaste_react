import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <div className="h-[200px] overflow-hidden ">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food"
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold my-2">{name}</h3>
      <h4 className="line-clamp-2 hover:line-clamp-7">{cuisines.join(', ')}</h4>
      <p className="my-2">{avgRating} stars</p>
      <p className="text-lg font-bold">{costForTwo}</p>
      <p className="text-gray-600">{locality} </p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>Open</label>
      <RestaurantCard {...props} />
    </div>;
  };
};

export default RestaurantCard;
