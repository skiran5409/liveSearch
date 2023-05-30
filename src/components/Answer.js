import React from "react";  
import { connect } from "react-redux";
import { updateScore } from "../Redux/action";
import questions from './questions.json';


class OutGoing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'score': 0
        };

        this.submittedAnswer = this.submittedAnswer.bind(this);
    }

    

    submittedAnswer = (str) => {
        const ans = str.toString(); 
        switch (ans) {
            case 'Ottawa':
                 this.props.updateScore(1);                
                 break;
            case 'Vancouver':
                 this.props.updateScore(-1);
                 break;
            case 'Toronto':
                 this.props.updateScore(-1);
                 break;   
            case 'Montreal':
                 this.props.updateScore(-1);
                 break;
            default:
                break
        }
    }

    render() {
        return (
            <div>
                {this.submittedAnswer(this.props.submittedValue)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapActionsToProps = {
    updateScore: updateScore
    
}

export default connect(mapStateToProps, mapActionsToProps)(OutGoing);