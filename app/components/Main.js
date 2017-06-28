import React from "react";
import Quotes from "./children/Quotes";
import Form from "./children/Form";
import Nav from "./children/Nav";
import Footer from "./children/Footer";
import API from "../utils/API.js";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      saved: [],
      quote: []
    }
    this.setQuote = this.setQuote.bind(this);
  }

  // rendering all quotes as soon as the page is loaded
  componentDidMount() {
    API.getQuotes().then((data) => {
      this.setState({ saved: data.data });
    });
  }

  // saving new quotes so that they can be rendered after they are inputted
  componentDidUpdate(prevProps, nextProps) {
    if (prevProps.quote != nextProps.quote) {
      API.saveQuote(this.state.quote).then((data) => {
        API.getQuotes().then((data) => {
          this.setState({ saved: data.data, quote: "" });
        });
      });
    }
  }

  // This function allows children to update the parent when Form.js is submitted
  setQuote(quote) {
    this.setState({ quote: quote });
  }

  render() {
    return (
        <div>
            <Nav  />
                <Form setQuote={this.setQuote}/>
                <Quotes saved={this.state.saved}/>  
            <Footer />
        </div>
    );
  }
}

// Export the component back for use in other files
module.exports = Main;