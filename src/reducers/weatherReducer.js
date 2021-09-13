import weatherMapping from '@/utils/mapping/weather';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'initial',
    entities: localStorage.getItem('reduxState')
        ? JSON.parse(localStorage.getItem('reduxState'))
        : {}
};


export const weatherSlice = createSlice({
    name: 'weather',
    initialState:initialState.entities.weather|| {},
    reducers: {
        addWeather(state, action) {
            const weather = action.payload;
            state.entities = weather;
        }
    }
})


export const { addWeather } = weatherSlice.actions;

export default weatherSlice.reducer