import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import skillsReducer from './slices/skillsSlice';
import projectReducer from './slices/projectSlice';
import timelineReducer from './slices/timelineSlice';
import singleProjectReducer from './slices/singleProjectSlice';
export const store = configureStore({
    reducer:{
        user: userReducer,
        skills: skillsReducer,
        project: projectReducer,
        timeline: timelineReducer,
        // software: softwareReducer
        singleProject: singleProjectReducer
    }
});