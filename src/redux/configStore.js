import { combineReducers, createStore, applyMiddleware } from "redux";
import countReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    counter: countReducer,
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

//i create this array because in future i would create others middlewares and save here;
const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware) );

sagaMiddleware.run(watcherSaga)

export default store;