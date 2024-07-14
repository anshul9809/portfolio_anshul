import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const timelineSlice = createSlice({
    name: "timeline",
    initialState:{
        loading: false,
        timeline:[],
        error: null,
               
    },
    reducers:{
        loadTimelineRequest(state, action){
            state.loading = true;
            state.timeline = [];
        },
        loadTimelineSuccess(state, action){
            state.loading = false;
            state.timeline = action.payload;
        },
        loadTimelineFailed(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        clearAllErrors(state, action) {
            state.error = null;
        },
    }


});

export const getTimeline = ()=> async (dispatch)=>{
    dispatch(timelineSlice.actions.loadTimelineRequest());
    try {
        const {data} = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}timeline`
            , {
            withCredentials: true,
        });
        dispatch(timelineSlice.actions.loadTimelineSuccess(data.timelines));
        dispatch(timelineSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(timelineSlice.actions.loadTimelineFailed(error.response.data.message));
    }

}

export default timelineSlice.reducer
