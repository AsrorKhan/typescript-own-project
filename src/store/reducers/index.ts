import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user";
import todosReducer from './todos'
import postReducer from './posts'
import userLoginReducer from './login'
export const rootReducer = combineReducers({
    userReducer,
    todosReducer,
    postReducer,
    userLoginReducer
})
