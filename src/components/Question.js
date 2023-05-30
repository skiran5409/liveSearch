import  React, { Component } from 'react';

import { connect } from 'react-redux';
import { submitValue, quizData } from '../Redux/action';
import questions from './questions.json';

class Incoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'inputValue': this.props.defaultInput,
        };
        // this.props.quizData(questions)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    

    handleChange(event) {
        console.log(event.target.value);
        this.setState({'inputValue': event.target.value});
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
                    <div onChange={this.handleChange} >
                        {
                            questions.map((question, index) => {
                                return (
                                    <div key={index}>
                                        <p>{question.question}</p>
                                        <ul className='list' >
                                            {
                                                question.options.map((answer, index) => {
                                                    return (
                                                        <li key={index}><input type='radio' name='answer' value={answer} /> {answer}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            ) 
                        } 
                    
                        <input type='submit' value='Submit' className='submitBtn' />
                    </div>
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
    submitValue : submitValue,
    quizData: quizData
};

export default connect(mapStateToProps, mapActionsToProps)(Incoming);