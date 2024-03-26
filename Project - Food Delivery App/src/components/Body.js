import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { SWIGGY_LIVE_API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantObj, setRestaurantObj] = useState([]);
  const [filteredRestaurantObj, setFilteredRestaurantObj] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_LIVE_API_URL);

    const json = await data.json();

    setRestaurantObj(
      //Optional Chaining
      json.data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurantObj(
      json.data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  return restaurantObj.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredResListBySearchText = restaurantObj.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantObj(filteredResListBySearchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResListByRating = restaurantObj.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurantObj(filteredResListByRating);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantObj.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
