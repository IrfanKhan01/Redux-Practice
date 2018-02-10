
// import { Reducer } from './reducers/reducer';
import AllReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


const store = createStore(
    AllReducers,
    {},
    applyMiddleware(thunk)
)
// const store = createStore(Reducer);

export default store;