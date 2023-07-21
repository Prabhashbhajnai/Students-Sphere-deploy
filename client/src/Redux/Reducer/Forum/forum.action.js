import axios from 'axios';

// Redux type
import { GET_QUESTION, GET_SPECIFIC_QUESTION, POST_QUESTION } from './forum.type';

export const getQuestion = () => async (dispatch) => {
    try {
        const questionList = await axios({
            method: "GET",
            // url: `http://localhost:4000/forum`
            url: `/api/forum`
        });

        return dispatch({ type: GET_QUESTION, payload: questionList.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const postQuestion = (questionData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            // url: `http://localhost:4000/forum/new`,
            url: `/api/forum/new`,
            data: { questionData }
        });

        return dispatch({ type: POST_QUESTION, payload: questionData });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const getSpecificQuestion = (_id) => async (dispatch) => {
    try {
        const question = await axios({
            method: "GET",
            // url: `http://localhost:4000/forum/${_id}`,
            url: `/api/forum/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_QUESTION, payload: question.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};