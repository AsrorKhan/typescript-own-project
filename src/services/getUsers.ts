import {userSlice} from "../store/reducers/user";
import axios from "axios";
import {AppDispatch} from "../store/store";
import {IUser} from "../models/IUser";

export const getUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching)
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError("Ошибка при загрузке пользователей"))
    }
}
