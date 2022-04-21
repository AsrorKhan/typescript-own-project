import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user";
import todosReducer from './todos'
import changeLang from "./changeLang";
import postReducer from './posts'
import userLoginReducer from './login'
export const rootReducer = combineReducers({
    userReducer,
    todosReducer,
    postReducer,
    userLoginReducer,
    changeLang
})
