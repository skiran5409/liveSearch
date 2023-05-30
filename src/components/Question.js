import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../Redux/actions';

const Question = ({ questionNumber, onNextQuestion }) => {
  const questions = useSelector(state => state.questions);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();
  const currentQuestion = questions[questionNumber - 1];
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(questionNumber, answer));
    onNextQuestion();
  };

  useEffect(() => {
    const correctAnswers = answers.filter(answer => answer.isCorrect);
    setScore(correctAnswers.length);
  }, [answers]);

  return (
    <div className="question">
      <div className="score">Score: {score}</div>
      <h2>Question {questionNumber}</h2>
      <p>{currentQuestion.question}</p>
      <div className="answers">
        {currentQuestion.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
