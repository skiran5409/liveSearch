import React from "react";  
import { connect } from "react-redux";

class OutGoing extends React.Component {
    submittedAnswer = (str) => {
        str = str.toLowerCase();
        str = str.replace(/\s/g, '');
        if (str === "delhi") {
            return "Correct Answer"
        } else {
            return "Wrong Answer"
        }
    }

    render() {
        return (
            <div>
                <b>The Answer is</b>
                <p>{this.submittedAnswer(this.props.submittedValue)}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(OutGoing);