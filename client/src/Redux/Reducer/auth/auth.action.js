import axios from 'axios';

//Redux types
import { SIGN_IN, SIGN_UP, GOOGLE_Auth, SIGN_OUT } from './auth.type';

// redux actions
import { getMyself, clearUser } from '../user/user.action';

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            // url: `http://localhost:4000/auth/signin`,
            url: `/api/auth/signin`,
            data: { credentials: userData },
        });

        getMyself();

        localStorage.setItem(
            "studentHubUser",
            JSON.stringify({ token: User.data.token })
        );

        return dispatch({ type: SIGN_IN, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("studentHubUser", JSON.stringify({ token }));

        getMyself();

        return dispatch({ type: GOOGLE_Auth, payload: {} })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("studentHubUser");
        clearUser();
        window.location.href = "http://localhost:3000";
        return dispatch({ type: SIGN_OUT, payload: {} })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            // url: `http://localhost:4000/auth/signup`,
            url: `/api/auth/signup`,
            data: { credentials: userData },
        });

        getMyself();

        localStorage.setItem(
            "studentHubUser",
            JSON.stringify({ token: User.data.token })
        );

        return dispatch({ type: SIGN_UP, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};