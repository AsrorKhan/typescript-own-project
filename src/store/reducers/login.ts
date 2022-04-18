import {createSlice} from "@reduxjs/toolkit";


interface IUser {
    access_token: string;
    refresh_token: string;
    scope: [];
    token_type: string;
    isAuth: boolean
}


const initialState: IUser = {
    access_token: '',
    refresh_token: '',
    scope: [],
    token_type: '',
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.access_token = action.payload;
            state.refresh_token = action.payload;
            state.scope = action.payload;
            state.token_type = action.payload;
            state.isAuth = action.payload
        }
    }
})

export default userSlice.reducer;
