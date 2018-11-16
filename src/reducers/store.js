import { createStore, combineReducers } from 'redux';
import todo from './todo';
// if we only have one reducer in the application we don't need the combineReducer
// but if there are multiple; then we need comebineReducer and we need to put all of them one by one inside the combineReducer in rootReducer

const rootReducer = combineReducers({
    todo: todo,
})

const store = createStore(rootReducer);
// if there is only one reducer we can just type store as const store = createStore(todo)

export default store;