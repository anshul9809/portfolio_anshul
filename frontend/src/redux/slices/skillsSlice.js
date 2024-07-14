import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const skillsSlice = createSlice({
    name: "skill",
    initialState:{
        loading: false,
        skill:[],
        error: null,
               
    },
    reducers:{
        loadSkillRequest(state, action){
            state.loading = true;
            state.skill = [];
        },
        loadSkillSuccess(state, action){
            state.loading = false;
            state.skill = action.payload;
        },
        loadSkillFailed(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        clearAllErrors(state, action) {
            state.error = null;
        },
    }


});

export const getSkill = ()=> async (dispatch)=>{
    dispatch(skillsSlice.actions.loadSkillRequest());
    try {
        const {data} = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}skill`
            , {
            withCredentials: true,
        });
        dispatch(skillsSlice.actions.loadSkillSuccess(data.skills));
        dispatch(skillsSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(skillsSlice.actions.loadSkillFailed(error.response.data.message));
    }

}

export default skillsSlice.reducer
