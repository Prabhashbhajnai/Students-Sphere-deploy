import { GET_QUESPAPER } from "./quespaper.type";

const INITIAL_STATE = {
    quespapers: [],
};

const quespaperReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_QUESPAPER:
            return {
                ...state,
                quespapers: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default quespaperReducer;