
import { units } from '@/types/units.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    entities: { unit: units.C }
};


export const unitSlice = createSlice({
    name: 'unit',
    initialState: initialState || {},
    reducers: {
        changeUnit(state, action) {
            const unit = action.payload;
            state.entities = unit;
        }
    }
});

export const { changeUnit } = unitSlice.actions;

export default unitSlice.reducer;