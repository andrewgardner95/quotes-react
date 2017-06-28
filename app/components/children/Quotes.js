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
            <div>
                <h3>Quotes</h3>
                <div>
                    {this.state.saved.map((saved, i) => {
                        return (
                            <p key={i}>{saved.text}</p>
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default Quotes;