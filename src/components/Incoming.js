import  React, { Component } from 'react';

import { connect } from 'react-redux';
import { submitValue } from '../Redux/action';

class Incoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'inputValue': this.props.defaultInput,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({'inputValue': event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        this.props.submitValue(this.state.inputValue);
        event.preventDefault();
    }

    handleReset(event) {
        this.setState({'inputValue': ''});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <label>
                        Submit your Answer:
                    </label>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                    </form>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        defaultInput: props.defaultInput + ' ' + state.submittedValue
    };
}

const mapActionsToProps = {
    submitValue : submitValue
};

export default connect(mapStateToProps, mapActionsToProps)(Incoming);