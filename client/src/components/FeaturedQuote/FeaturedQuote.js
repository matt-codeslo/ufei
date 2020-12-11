import React from "react";
import { } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";
import "./FeaturedQuote.css";

class FeaturedQuote extends React.Component {
    render() {
        return (
            <div className="container-fluid featured-quote-container blockquote">
                <div className="featured-quote-quote-container col-lg-8 offset-lg-2">
                    <ImQuotesLeft className="featured-quote-quote-icon text-secondary" />
                    <h2 className="featured-quote-quotation">
                        Open your eyes and take the time to look: the trees will be happy to reveal their secrets to you.
                    </h2>
                    <p className="text-muted featured-quote-citation">-CEDRIC POLLET</p>
                </div >
            </div>
        )
    }
}

export default FeaturedQuote;