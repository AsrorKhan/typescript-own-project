import {AppDispatch} from "../store/store";
import {todosSlice} from "../store/reducers/todos";
import axios from "axios";
import {ITodos} from "../models/ITodos";


export const getTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosSlice.actions.todosFetching)
        const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch(todosSlice.actions.todosFetchingSuccess(response.data));
    } catch (e) {
        dispatch(todosSlice.actions.todosFetchingError('Ошибка при загрузке список дел'))
    }
}