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

  // getting the quotes inputted previously so they can be rendered
  componentDidMount() {
    API.getQuotes().then((data) => {
      this.setState({ saved: data.data });
    });
  }

  // saving quotes so that they can be displayed after they are inputted
  componentDidUpdate(prevProps, nextProps) {
    if (prevProps.quote != nextProps.quote) {
      API.saveQuote(this.state.quote).then((data) => {
        API.getQuotes().then((data) => {
          this.setState({ saved: data.data, quote: "" });
        });
      });
    }
  }

  // This function allows children to update the parent, called when Form.js is submitted
  setQuote(quote) {
    this.setState({ quote: quote });
  }

  render() {
    return (
        <div>
            <Nav  />
              <div>
                <Form setQuote={this.setQuote}/>
                <Quotes saved={this.state.saved}/>
              </div>
            <Footer />
        </div>
    );
  }
}

// Export the component back for use in other files
module.exports = Main;