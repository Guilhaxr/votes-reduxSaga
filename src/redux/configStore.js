import { combineReducers, createStore } from "redux";
import countReducer from "./ducks/counter";

const reducer = combineReducers({
    counter: countReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;