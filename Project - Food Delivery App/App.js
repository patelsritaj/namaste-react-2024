import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 * -- Logo
 * -- Nav Items
 * Body
 * -- Search
 * -- RestaurantContainer
 *    -- RestaurantCard
 *         --- Img
 *         --- Name of res, rating
 * Footer
 * -- Copyright
 * -- Links
 * -- Address
 * -- Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.clipartmax.com/png/small/111-1118804_android-food-delivery-apps.png"
          alt="Android Food Delivery Apps @clipartmax.com"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-food"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/slheenytwb3iaypqf4yd"
        alt="popular food image"
      ></img>
      <h4>Meghana Foods</h4>
      <ul className="moreinfo top3items">
        <li>Chicken Biryani</li>
        <li>Kabab</li>
        <li>Chicken Masala</li>
      </ul>
      <ul className="moreinfo resdetails">
        <li>4.5 stars</li>
        <li>ETA - 38 mins</li>
        <li>500 per two</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
