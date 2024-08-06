
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactEleemnt - JS Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "JSK React");

console.log(heading);

//JSX - Not HTML in javascript (It is HTML like syntax)
//JSX code is transpiled before it reaches the JS engine - This is done by PARCEL with the help of BABEL(JavaScript Compiler/ Transpiler)
//JSX Code -> transpiled to createElement React.createElement => ReactEleemnt - JS Object => HTMLElement(render)
//Various arributes of JSX - img tag
//JSX - HTML Attributes are given as camel case ()

const jsxHeading = (
    <h1 id="heading" className="heading">
        JSK React using JSX
    </h1>
);
console.log(jsxHeading);


//React Component


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
