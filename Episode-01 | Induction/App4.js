/*
 * <div id = "parent">
 *    <div id = "children1">
 *      <h1> "I am nested header 1" </h1>
 *      <h2> "I am sibling header 1" </h2>
 *    </div>
 *    <div id = "children2">
 *      <h1> "I am nested header 2" </h1>
 *      <h2> "I am sibling header 2" </h2>
 *    </div>
 * </div>
 *
 */

const nestedsiblings = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", {}, "I am nested header 1"),
    React.createElement("h2", {}, "I am sibling header 1"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "I am nested header 2"),
    React.createElement("h2", {}, "I am sibling header 2"),
  ]),
]);

const root4 = ReactDOM.createRoot(document.getElementById("root4"));

root4.render(nestedsiblings);
