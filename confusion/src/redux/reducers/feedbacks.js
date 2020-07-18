import * as ActionTypes from '../ActionTypes';

export const Feedback = (state = {
    errorMessage: null,
    feedback: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return {...state, errorMessage: null, feedback: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errorMessage: action.payload, comments: []};

        default:
            return state;
    }
};