const heading = React.createElement(
  "h1",
  { id: "h1 heading", xyz: "abc" },
  "Namaste from React - Way 2"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
