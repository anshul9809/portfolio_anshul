import { createSlice } from "@reduxjs/toolkit";

const singleProject = createSlice({
    name: "singleProject",
    initialState:{
        loading: false,
        project:{},
        error: null,
    },
    reducers:{
        loadSingleProjectRequest(state, action){
            state.loading = true;
        },
        loadSingleProjectSuccess(state, action){
            state.loading = false;
            state.project = action.payload;
        },
        loadSingleProjectFailure(state, action){
            state.loading = false;
            state.error = action.payload;
        }
    }

});

export const getSingleProject = (id) => async (dispatch)=>{
    dispatch(singleProject.actions.loadSingleProjectRequest());
    try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}project/${id}`);
        dispatch(singleProject.actions.loadSingleProjectSuccess(data.project));
    } catch (error) {
        dispatch(singleProject.actions.loadSingleProjectFailure(error.response.data.message));
    }
}


// yet to be checkeed

export default singleProject.reducer