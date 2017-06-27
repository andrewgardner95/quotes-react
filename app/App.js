import React from "react";

// Importing ReactDOM and our routes
import ReactDOM from "react-dom";
import routes from "./config/routes";

var Main = require('./components/Main.js')

var initial = [{
    text: "Hello World"
},{
    text: "I have a dream",
    favorited: {
        type: true,
    }
}];

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<Main items={initial}/>, document.getElementById("app"));