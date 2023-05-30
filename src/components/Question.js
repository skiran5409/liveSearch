import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submitValue, quizData } from '../Redux/action';
import questions from './questions.json';

const Incoming = ({ defaultInput, submitValue, quizData }) => {
  const [inputValue, setInputValue] = useState(defaultInput);

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    submitValue(inputValue);
    event.preventDefault();
  };

  const handleReset = (event) => {
    setInputValue('');
    event.preventDefault();
  };

//   useEffect(() => {
//     quizData(questions); // Initialize quiz data
//   }, [quizData]);

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div onChange={handleChange}>
          {questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <ul className='list'>
                {question.options.map((answer, index) => (
                  <li key={index}>
                    <input type='radio' name='answer' value={answer} /> {answer}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <input type='submit' value='Submit' className='submitBtn' />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    defaultInput: props.defaultInput + ' ' + state.submittedValue,
  };
};

const mapActionsToProps = {
  submitValue: submitValue,
  quizData: quizData,
};

export default connect(mapStateToProps, mapActionsToProps)(Incoming);
