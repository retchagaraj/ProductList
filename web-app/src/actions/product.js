import {FETCH_ALL } from '../constants/actionType';
import * as api from '../api';

// Action Creators 

export const getPosts = () => async(dispatch) =>{
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
    // return action;
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}


export const getcontactList = () => async(dispatch) =>{
    try {
        const { data } = await api.getContact();

        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}


