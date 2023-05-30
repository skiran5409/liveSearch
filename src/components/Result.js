import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
    const answers = useSelector(state => state.answers);
    const [score, setScore] = useState(0);

    useEffect(() => {
    const correctAnswers = answers.filter(answer => answer.isCorrect);
    setScore(correctAnswers.length);
    }, [answers]);

    return (
        <div className="result">
            <h2>Result</h2>
            <p>You answered {score} out of 10 questions Correctly!!!</p>
        </div>
    );

}

export default Result;