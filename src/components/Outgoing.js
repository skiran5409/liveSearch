import React from "react";  
import { connect } from "react-redux";

class OutGoing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'answer': false
        };

        this.submittedAnswer = this.submittedAnswer.bind(this);
    }

    submittedAnswer = (str) => {
        str = str.toLowerCase();
        str = str.replace(/\s/g, '');
        if (str === "toronto") {
            this.state.answer = true;
           
        } else {
            this.state.answer = false;
            
        }
    }

    render() {
        return (
            <div>
                <b>The Answer is</b>
                {this.submittedAnswer(this.props.submittedValue)}
                <p className={(this.state.answer ? 'correctAns' : 'wrongAns')}>
                    {this.state.answer ? 'CorrectAnswer' : 'WrongAnswer'}
                </p>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(OutGoing);