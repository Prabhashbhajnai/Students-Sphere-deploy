import { GET_TEACHERS, GET_SPECIFIC_TEACHER } from "./teacher.type";

const INITIAL_STATE = {
    teachers: [],
    selectedTeacher: {},
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TEACHERS:
            return {
                ...state,
                teachers: action.payload,
            };

        case GET_SPECIFIC_TEACHER:
            return {
                ...state,
                selectedTeacher: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default booksReducer;