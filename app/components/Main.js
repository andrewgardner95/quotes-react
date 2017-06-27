import React from "react";

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Import sub-components
import Quotes from "./children/Quotes";
import Form from "./children/Form";
import Nav from "./children/Nav";
import Footer from "./children/Footer";

// Helper Function
import API from "../utils/API.js";

var Main = React.createClass({
  // This function allows children to update the parent.
  setQuote: function(quote) {
    this.setState({ quote: quote });
  },
  render: function () {
    return (
        <div>
            <Nav />

            <div>
                {this.props.items.map(function(item, index) {
                    return (
                        <Quotes item={item} key={"item"+index}/>
                    )
                })
                }
            </div>

            <Form />

            <Footer />
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
