import React from "react";
import API from "../../utils/API.js";

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