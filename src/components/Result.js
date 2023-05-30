import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
    const answers = useSelector(state => state.answers);

    const correctAnswers = answers.filter(answer => answer.isCorrect);

    return (
        <div className="result">
            <h2>Result</h2>
            <p>You answered {correctAnswers.length} out of 10 questions Correctly!!!</p>
        </div>
    );

}

export default Result;