import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const projectSlice = createSlice({
    name: "project",
    initialState:{
        loading: false,
        project:[],
        error: null,
        
    },
    reducers:{
        loadProjectRequest(state, action){
            state.loading = true;
            state.project = [];
        },
        loadProjectSuccess(state, action){
            state.loading = false;
            state.project = action.payload;
        },
        loadProjectFailed(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        clearAllErrors(state, action) {
            state.error = null;
        },
    }


});

export const getProject = ()=> async (dispatch)=>{
    dispatch(projectSlice.actions.loadProjectRequest());
    try {
        const {data} = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}project`
            , {
            withCredentials: true,
        });
        dispatch(projectSlice.actions.loadProjectSuccess(data.projects));
        dispatch(projectSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(projectSlice.actions.loadProjectFailed(error.response.data.message));
    }

}
export default projectSlice.reducer
