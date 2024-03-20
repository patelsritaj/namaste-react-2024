import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantObj, setRestaurantObj] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setRestaurantObj(
      json.data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantObj.length === 0) {
    return <h1>Loading ...</h1>;
  }

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
