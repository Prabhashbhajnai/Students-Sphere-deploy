import axios from 'axios';

// Redux type
import { GET_REVIEW, POST_REVIEW } from './review.type';

export const getReviews = (bookid) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            // url: `http://localhost:4000/reviews/${bookid}`,
            url: `/api/reviews/${bookid}`,
        });

        return dispatch({ type: GET_REVIEW, payload: reviewList.data });

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const postReviews = (reviewData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            // url: `http://localhost:4000/reviews/new`,
            url: `/api/reviews/new`,
            data: { reviewData }
        });

        return dispatch({ type: POST_REVIEW, payload: reviewData, });

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};