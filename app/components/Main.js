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

  getInitialState: function() {
    return {saved: [], quote: []};
  },

  // This function allows children to update the parent.
  setQuote: function(quote) {
    this.setState({ saved: quote });
  },
  render: function () {
    return (
        <div>
            <Nav />

            <Quotes saved={this.state.saved}/>

            <Form setQuote={this.setQuote}/>

            <Footer />
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;