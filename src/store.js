import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import { weatherSlice } from './reducers/weatherReducer'
import { locationSlice } from './reducers/locationReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({weather:weatherSlice.reducer,location:locationSlice.reducer});
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store