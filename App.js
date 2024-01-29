import React from "react";
import ReactDOM from "react-dom/client";
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


//     const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child1" }), [React.createElement("h1", {}, "I am Groot"), React.createElement("h2", {}, "I am Groot 2")],
//     React.createElement("div", { id: "child2" }), [React.createElement("h1", {}, "I am Groot"), React.createElement("h2", {}, "I am Groot 2")]])
// const heading = React.createElement("h1", { id: "heading" }, "keep Hello from react !!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//JSX
const Heading = () => ( <h1 id="heading" className="root">Hello form JSX</h1> )
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)

//React Functional Component
const HeadingComponent = () => (
<div id="container">
    {Heading()}
    <Heading />
    <h1>this is nameste React functional component</h1>
</div>
)
root.render(<HeadingComponent />)