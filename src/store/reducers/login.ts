import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface ILoginUser {
    userName: string,
    access_token: string;
    refresh_token: string;
    scope: [] | string;
    token_type: string;
    isAuth: boolean
}


const initialState: ILoginUser = {
    userName: '',
    access_token: '',
    refresh_token: '',
    scope: [],
    token_type: '',
    isAuth: false
}

export const createdUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state, action: PayloadAction<ILoginUser>){
            state.userName = action.payload.userName;
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            state.scope = action.payload.scope;
            state.token_type = action.payload.token_type;
            state.isAuth = action.payload.isAuth
        }
    }
})

export default createdUserSlice.reducer;
