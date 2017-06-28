import React from "react";
import API from "../../utils/API.js";

class Quotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saved: []
        }
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickFavorite = this.onClickFavorite.bind(this);
    }

    // Preparing the component to receive new quotes as the user inputs them
    componentWillReceiveProps(nextProps) {
        this.setState({ saved: nextProps.saved });
    }

    onClickFavorite(event) {
        var _id = event.currentTarget.getAttribute("data-id");
        var text = event.currentTarget.getAttribute("data-text");
        var favorited = event.currentTarget.getAttribute("data-favorited");
        // console.log(_id + " " + text + " " + favorited);
        API.favoriteQuote({_id, text, favorited}).then((data) => {
        });
    }

    onClickDelete(event) {
        var ID = event.currentTarget.getAttribute("data-id");
        var that = this;
        API.deleteQuote(ID).then((data) => {
            this.setState({saved: data.data});
        });
    }

    render() {
        return (
            <div>
                <h3>Quotes</h3>
                    {this.state.saved.map((saved, i) => {
                        return (
                            <p key={i}>
                                {saved.text}
                                <button className="btn btn-danger" onClick={this.onClickDelete} data-id={saved._id}>
                                    Delete
                                </button>
                                <button className="btn btn-success" onClick={this.onClickFavorite} data-id={saved._id} data-text={saved.text} data-favorited={saved.favorited}>
                                    Favorite
                                </button>
                            </p>
                        )
                    })}
            </div>
        );
    }
};

export default Quotes;