import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating, slaString, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-food"
        src={CDN_URL + cloudinaryImageId}
        alt="popular food image"
      ></img>
      <h4>{resData.info.name}</h4>
      <ul className="moreinfo top3items">
        <li>{cuisines[0]}</li>
        <li>{cuisines[1]}</li>
        <li>{cuisines[2]}</li>
      </ul>
      <ul className="moreinfo resdetails">
        <li>{avgRating} ⭐</li>
        <li>{sla.slaString}</li>
        <li>{costForTwo}</li>
      </ul>
    </div>
  );
};

export default RestaurantCard;
