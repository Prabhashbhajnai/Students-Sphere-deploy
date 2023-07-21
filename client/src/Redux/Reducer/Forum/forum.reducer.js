import { GET_QUESTION, GET_SPECIFIC_QUESTION, POST_QUESTION } from "./forum.type";

const INITIAL_STATE = {
    questions: [],
    selectedQuestion: {},
};

const forumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_QUESTION:
            return {
                ...state,
                questions: action.payload,
            };
        
        case GET_SPECIFIC_QUESTION:
            return {
                ...state,
                selectedQuestion: action.payload,
            };

        case POST_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload],
            };

        default:
            return {
                ...state
            };
    }
};

export default forumReducer;