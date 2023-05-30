import React, {useState} from 'react';
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <Provider store={store}>
      <div className="App">
        {currentQuestion < 10 ? (
          <Question
            questionNumber={currentQuestion + 1}
            onNextQuestion={handleNextQuestion} 
          />
        ) : (
          <Result />
        )}
      </div>
    </Provider>
  );
}

export default App;