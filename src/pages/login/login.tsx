import React, {FC, useState} from 'react';
import './login.scss'
import loginService from "../../services/loginService";

interface IUserData {
    userName: string;
    password: string;
}

const Login: FC = () => {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')


    const getToken = () => {
        const response =  loginService.login(userName, userPassword)
        console.log(response);
        setUserName('');
        setUserPassword('')
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
