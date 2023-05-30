import questions from '../data/questions';

const initialState = {
  questions: [...questions],
  answers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      const { questionNumber, selectedOptions } = action.payload;
      const currentQuestion = state.questions[questionNumber - 1];
      const isCorrect = currentQuestion.correctAnswer === selectedOptions;

      return {
        ...state,
        answers: [
          ...state.answers,
          {
            questionNumber,
            selectedOptions,
            isCorrect,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;