import React from "react";
import API from "../../utils/API.js";

class Quotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saved: []
        }
        // binding delete and favorite functions (to be completed)
    }

    // Preparing the component to receive new quotes as the user inputs them
    componentWillReceiveProps(nextProps) {
        this.setState({ saved: nextProps.saved });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Quotes</h3>
                </div>
                <div className="panel-body text-center">
                    {this.state.saved.map((saved, i) => {
                        return (
                            <p key={i}>
                                {saved.text}
                            </p>
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default Quotes;