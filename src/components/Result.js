import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
    render() {
        return (
            <div>
                <h1>Result</h1>
                {this.props.score >= 1 ? <div><p>Score: {this.props.score}</p>
                <p>Congrats you have passed this Quiz</p></div> : <div><p>Score: {this.props.score}</p>
                <p>Sorry !! Better Luck next time</p></div>}
                <input type="button" className="resetBtn" value="Restart Quiz" onClick={() => window.location.reload()} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Result);