export const SUBMIT_VALUE = 'SUBMIT_VALUE';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const QUIZ_DATA = 'QUIZ_DATA';

export function submitValue(input) {
  return {
    type: SUBMIT_VALUE,
    payload: {
      submittedValue: input
    }
  };
}

export function updateScore(value) {
  return {
    type: UPDATE_SCORE,
    payload: {
        score: value
    }
  };
}

export function quizData(value) {
    return {
        type: QUIZ_DATA,
        payload: {
            qdata: value
        }
    };
    }
