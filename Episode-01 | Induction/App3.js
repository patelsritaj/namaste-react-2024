/*
 * <div id = "parent">
 *    <div id = "children">
 *      <h1> "I am nested header" </h1>
 *      <h2> "I am sibling header" </h2>
 *     </div>
 * </div>
 *
 */

const headers = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "I am nested header"),
    React.createElement("h1", {}, "I am sibling header"),
  ])
);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(headers);
