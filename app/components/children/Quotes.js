import React from "react";

class Quotes extends React.Component {
  render() {
    return (
        <div>
            <p>{this.props.saved}</p>
        </div>
    );
  }
};

export default Quotes;