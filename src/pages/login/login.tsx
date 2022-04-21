import React, {FC, useState} from 'react';
import './login.scss'
import loginService from "../../services/loginService";
import {useAppDispatch} from "../../hooks/redux";
import {createdUserSlice, ILoginUser} from "../../store/reducers/login";
import {Navigate, useNavigate} from "react-router-dom";
import {RouterConstants} from "../../routing/routerConstants";

interface IUserData {
    userName: string;
    password: string;
}

const Login: FC = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const getToken = () => {
        if (userName === '' || userPassword === '') {
            alert('Заполняйте всех полей')
            return <Navigate to={'/login'}/>
        }
        const response = loginService.login(userName, userPassword)
        const {access_token, refresh_token, scope, token_type} = response;
        if (response.access_token) {
            const createdUser: ILoginUser = {
                userName,
                access_token,
                refresh_token,
                scope,
                token_type,
                isAuth: true
            }
            // localStorage.setItem('login_data', JSON.stringify(createdUser))
            dispatch(createdUserSlice.actions.createUser(createdUser))
            navigate(`/${RouterConstants.USERS_ROUTE}`)
        } else {
            alert('Invalid user!')
            navigate(`/${RouterConstants.LOGIN_ROUTE}`)
        }
    }

    return (
        <div className="login-page">
            <form action="" className='login-page__form' onSubmit={(e) => e.preventDefault()}>
                <h2>Login page</h2>
                <p>
                    <label className='login-page__label' htmlFor="username">User name</label>
                    <input className='login-page__input' type="text" id='username'
                           onChange={(e) => setUserName(e.target.value)}/>
                </p>
                <p>
                    <label className='login-page__label' htmlFor="password">Password</label>
                    <input className='login-page__input' type="text" id='password'
                           onChange={(e) => setUserPassword(e.target.value)}/>
                </p>
                <button onClick={() => getToken()}>Submit</button>
            </form>
        </div>
    );
};

export default Login;
