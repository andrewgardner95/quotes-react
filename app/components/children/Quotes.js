import React from "react";

class Quotes extends React.Component {
  render() {
    return (
        <div>
            <h4 className={this.props.item.favorited ? "strikeThrough" : ""}>{this.props.item.text}</h4>
        </div>
    );
  }
};

export default Quotes;