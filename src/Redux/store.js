import { createStore, combineReducers } from "redux";
import submittedValueReducer from "./reducer";
const allReducers = combineReducers({
  submittedValue: submittedValueReducer,
  score: submittedValueReducer,
  qdata: submittedValueReducer
});

const initialState = {
  submittedValue: '',
  score: 0,
qdata: []
};

const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
