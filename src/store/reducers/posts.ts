import {IPosts} from "../../models/IPosts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface postState {
    posts: IPosts[],
    isLoading: boolean,
    error: string
}

const initialState: postState = {
    posts: [],
    error: '',
    isLoading: false
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postFetching(state) {
            state.isLoading = true
        },
        postFetchingSuccess(state, action: PayloadAction<IPosts[]>) {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload
        },
        postFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})
export default postSlice.reducer
