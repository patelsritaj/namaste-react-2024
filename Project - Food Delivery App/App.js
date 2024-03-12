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

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="popular food image"
      ></img>
      <h4>{resData.info.name}</h4>
      <ul className="moreinfo top3items">
        <li>{resData.info.cuisines[0]}</li>
        <li>{resData.info.cuisines[1]}</li>
        <li>{resData.info.cuisines[2]}</li>
      </ul>
      <ul className="moreinfo resdetails">
        <li>{resData.info.avgRating}</li>
        <li>{resData.info.sla.slaString}</li>
        <li>{resData.info.costForTwo}</li>
      </ul>
    </div>
  );
};

const resObj = {
  info: {
    id: "712380",
    name: "Chicago Pizza",
    cloudinaryImageId: "80f040545552605e33eba09f8fa30be9",
    locality: "khb colony",
    areaName: "Koramangala",
    costForTwo: "₹500 for two",
    cuisines: ["Pizzas", "Fast Food", "Italian"],
    avgRating: 4.1,
    parentId: "60277",
    avgRatingString: "4.1",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 6.7,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "6.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-13 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹499",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {
    context: "seo-data-61e73e71-471e-4175-84ca-cfab6814a6ed",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/chicago-pizza-khb-colony-koramangala-bangalore-712380",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
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
