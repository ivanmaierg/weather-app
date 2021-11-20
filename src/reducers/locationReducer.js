
import { locationInitial } from '@/initialState';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'initial',
    entities: localStorage.getItem('reduxState')
        ? JSON.parse(localStorage.getItem('reduxState'))
        : {}
};

export const locationSlice = createSlice({
    name: 'location',
    initialState:initialState.entities.location || locationInitial.location,
    reducers: {
        setLocation(state, action) {
            const location = action.payload;
            state.entities = location;
        }
    }
})


export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;