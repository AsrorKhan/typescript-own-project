import {postSlice} from "../store/reducers/posts";
import axios from "axios";
import {AppDispatch} from "../store/store";
import {IPosts} from "../models/IPosts";

export const getPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postFetching);
        const response = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts');
        dispatch(postSlice.actions.postFetchingSuccess(response.data));
    } catch (e) {
        dispatch(postSlice.actions.postFetchingError('Ошибка при загрузке постов'));
    }
}