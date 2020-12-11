import React from 'react';
import './ErrorPage.css';

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Whoops, that's an error</h1>
                <a href="/" className="btn btn-primary">HOME</a>
            </div>

        )
    }
}

export default ErrorPage;