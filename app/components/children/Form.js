import React from "react";

var Form = React.createClass ({
    
    getInitialState: function() {
        return { quote: "" };
    },
    handleChange: function(event) {
        this.setState({ quote: event.target.value });
    },
    handleSubmit: function(event) {
        event.preventDefault();

        console.log("Adding item:", this.state.quote);

        // Set the parent to have the search term
        this.props.setQuote(this.state.quote);
        this.setState({ quote: "" });
    },
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
});

export default Form;