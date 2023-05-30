import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../Redux/action';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'score': 0
        };
    };

    render() {
        return (
            <div>
            <div className='marks'> {this.props.score}/10</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapActionsToProps = {
    updateScore: updateScore
}

export default connect(mapStateToProps, mapActionsToProps)(Score);


