import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurantObj, setRestaurantObj] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResListByRating = restaurantObj.filter(
              (res) => res.info.avgRating > 4.4
            );
            setRestaurantObj(filteredResListByRating);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantObj.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
