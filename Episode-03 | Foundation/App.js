import React from "react";
import ReactDOM from "react-dom/client";

//React Syntax
/*
const header = React.createElement("h1", {}, "Welcome To Chapter 3");
*/

//JSX - like HTML syntax in JS, it is transpiled before reaching to browser JS engine
//JSX -> React.creatElement -> ReactElement-JS Object -> HTMLElement(render)
//ReactElement
const jsxHeader = <h1>Welcome to JSX</h1>;

console.log(jsxHeader);

//React Functional Component
const HeaderUsingFunctionalComponent = () => {
  return (
    <div id="parent">
      <HeaderUsingFunctionalComponentTwo />
      <h1>Namaste React using React Functional Component</h1>;
    </div>
  );
};

const HeaderUsingFunctionalComponentTwo = () => {
  return <h1>Namaste Again</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderUsingFunctionalComponent />);
