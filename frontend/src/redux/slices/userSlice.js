import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        loading: false,
        user:{},
        error: null,
        
    },
    reducers:{
        loadUserRequest(state, action){
            state.loading = true;
            state.user = {};
        },
        loadUserSuccess(state, action){
            state.loading = false;
            state.user = action.payload;
        },
        loadUserFailed(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        clearAllErrors(state, action) {
            state.error = null;
        },
    }


});

export const getUser = ()=> async (dispatch)=>{
    dispatch(userSlice.actions.loadUserRequest());
    try {
        const {data} = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}user/portfolio`
            , {
            withCredentials: true,
        });
        dispatch(userSlice.actions.loadUserSuccess(data.user));
        dispatch(userSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(userSlice.actions.loadUserFailed(error.response.data.message));
    }

}

export default userSlice.reducer
