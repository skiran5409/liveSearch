import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../Redux/actions';

const Question = ({ questionNumber, onNextQuestion }) => {
  const questions = useSelector(state => state.questions);
  const answers = useSelector((state) => state.answers)
  const dispatch = useDispatch();
  const currentQuestion = questions[questionNumber - 1];

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(questionNumber, answer));
    onNextQuestion();
  };

  const getScore = () => {
    const correctAnswers = answers.filter(answer => answer.isCorrect);
    return correctAnswers.length;
  };

  return (
    <div className="question">
      <div className="score">score: {getScore()}</div>
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