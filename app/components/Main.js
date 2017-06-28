import React from "react";
import Quotes from "./children/Quotes";
import Form from "./children/Form";
import Nav from "./children/Nav";
import Footer from "./children/Footer";
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

            <Form setQuote={this.setQuote}/>

            <Quotes saved={this.state.saved}/>

            <Footer />
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;