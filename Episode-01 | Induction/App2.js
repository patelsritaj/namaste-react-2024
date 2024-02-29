/*
 * <div id = "parent">
 *    <div id = "children">
 *      <h1> "I am nested header" </h1>
 *     </div>
 * </div>
 *
 */

const nested_header = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "I am nested header")
  )
);

console.log(nested_header);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(nested_header);
