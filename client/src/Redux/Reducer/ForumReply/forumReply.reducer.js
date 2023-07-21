import { GET_REPLY, POST_REPLY } from "./forumReply.type";

const INITIAL_STATE = {
    reply: [],
};

const replyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_REPLY:
            return {
                ...state,
                reply: action.payload,
            };

        case POST_REPLY:
            return {
                ...state,
                reply: [...state.reply, action.payload],
            }

        default:
            return {
                ...state,
            };
    }
};

export default replyReducer;