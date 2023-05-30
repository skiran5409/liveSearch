import { SUBMIT_VALUE, UPDATE_SCORE, QUIZ_DATA } from "./action";


const submittedValueReducer = (state = '', action) => {
  switch (action.type) {
    case SUBMIT_VALUE:
      return action.payload.submittedValue;
    case UPDATE_SCORE:
      return action.payload.score;
      case QUIZ_DATA:
        return action.payload.qdata;
    default:
      return state;
  }
};

export default submittedValueReducer;
