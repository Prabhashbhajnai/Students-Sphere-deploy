import axios from "axios";

import { GET_QUESPAPER } from "./quespaper.type";

export const getQuespapers = (teacherid) => async (dispatch) => {
    try {
        const quespaperList = await axios({
            method: "GET",
            // url: `http://localhost:4000/quespaper/${teacherid}`,
            url: `/api/quespaper/${teacherid}`,
        });

        return dispatch({ type: GET_QUESPAPER, payload: quespaperList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};