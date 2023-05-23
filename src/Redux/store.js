import { createStore, combineReducers } from "redux";
import submittedValueReducer from "./reducer";

const allReducers = combineReducers({
    submittedValue: submittedValueReducer
});

const store = createStore(
    allReducers,
    {
        submittedValue: ''
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };