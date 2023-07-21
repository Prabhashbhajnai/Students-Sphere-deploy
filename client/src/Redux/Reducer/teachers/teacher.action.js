import axios from 'axios';

import { GET_TEACHERS, GET_SPECIFIC_TEACHER } from './teacher.type';

export const getTeachers = () => async (dispatch) => {
    try {
        const teacherList = await axios({
            method: "GET",
            // url: `http://localhost:4000/teachers`,
            url: `/api/teachers`,
        });

        return dispatch({ type: GET_TEACHERS, payload: teacherList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getSpecificTeacher = (_id) => async (dispatch) => {
    try {
        const teacher = await axios({
            method: "GET",
            // url: `http://localhost:4000/teachers/${_id}`,
            url: `/api/teachers/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_TEACHER, payload: teacher.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};