import React from "react";
import ReactDOM  from "react-dom";
/* <div id="parent">
        <div id="child">
            <h1>i am Groot</h1>
            <h2>i am Groot 2</h2>
        </div>
        <div id="child2">
            <h1>i am Groot</h1>
            <h2>i am Groot 2</h2>
        </div>
    </div> */
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" }), [React.createElement("h1", {}, "I am Groot"), React.createElement("h2", {}, "I am Groot 2")],
    React.createElement("div", { id: "child2" }), [React.createElement("h1", {}, "I am Groot"), React.createElement("h2", {}, "I am Groot 2")]])
const heading = React.createElement("h1", { id: "heading" }, "keep Hello from react !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);