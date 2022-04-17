import {ITodos} from "../../models/ITodos";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface TodosState {
    todos: ITodos[];
    isLoading: boolean;
    error: string;
}


const initialState: TodosState = {
    todos: [],
    isLoading: false,
    error: ''
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true
        },
        todosFetchingSuccess(state, action: PayloadAction<ITodos[]>) {
            state.isLoading = false;
            state.todos = action.payload;
            state.error = '';
        },

        todosFetchingError(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})


export default todosSlice.reducer;