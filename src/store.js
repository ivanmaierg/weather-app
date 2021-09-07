import { createStore , combineReducers, applyMiddleware, compose } from 'redux';
// import locationActions  from './actions/locationActions';
import weatherActions from './actions/weatherActions.js';





const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;



function weatherReducer(state = {}, action){
    switch(action.type){
        case weatherActions.GET_WEATHER:
            return { weather:action.payload }
        default:
            return state
    }
};


const store = createStore(weatherReducer,[]);

export default store;