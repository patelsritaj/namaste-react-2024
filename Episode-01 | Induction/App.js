const heading = React.createElement(
  "h1",
  { id: "h1-heading", xyz: "abc" },
  "Namaste from React - Way 2"
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
