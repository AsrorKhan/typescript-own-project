import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user";
import todosReducer from './todos'
import postReducer from './posts'

export const rootReducer = combineReducers({
    userReducer,
    todosReducer,
    postReducer
})
