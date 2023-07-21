import axios from 'axios';

// Redux type
import { GET_REPLY, POST_REPLY } from './forumReply.type';

export const getReply = (quesid) => async (dispatch) => {
    try {
        const replyList = await axios({
            method: 'GET',
            // url: `http://localhost:4000/reply/${quesid}`,
            url: `/api/reply/${quesid}`,
        });

        return dispatch({ type: GET_REPLY, payload: replyList.data });

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const postReply = (replyData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            // url: `http://localhost:4000/reply/new`,
            url: `/api/reply/new`,
            data: { replyData }
        });

        return dispatch({ type: POST_REPLY, payload: replyData, });

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};