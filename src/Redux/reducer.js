import { SUBMIT_VALUE } from "./action";

const submittedValueReducer = (state = '', action) => {
    switch(action.type) {
        case SUBMIT_VALUE:
            return action.payload.submittedValue;
        default:
            return state;
    }
}

export default submittedValueReducer;