import React from "react";

class Form extends React.Component {
    constructor(props) {
    // This super(props) line lets us access our parents properties as props.
    super(props);
    this.state = {
      quote: ""
    };
    // These lines allow the render function to access our components' functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setQuote(this.state.quote);
    this.setState({ quote: "" });
  }

  render() {
    return (
        <div className="addItem">
            <form onSubmit={this.handleSubmit}>
                <input id="quote" value={this.state.quote} onChange={this.handleChange}/>
                <button>Add Quote</button>
            </form>
        </div>
    );
  }
};

export default Form;