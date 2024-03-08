import React from "react";
import ReactDOM from "react-dom/client";

//React Syntax
/*
const header = React.createElement("h1", {}, "Welcome To Chapter 3");
*/

//JSX - like HTML syntax in JS
const jsxHeader = <h1>Welcome to JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeader);
