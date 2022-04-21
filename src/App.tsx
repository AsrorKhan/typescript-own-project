import React from 'react';
import './App.scss';
import {Layout} from "antd";
import {useAppSelector} from "./hooks/redux";
import AppRouter from "./routing/appRouter";

function App() {
    // const [userLoginData, setLoginData] = useState<ILoginUser>({
    //     userName: '',
    //     isAuth: false,
    //     scope: [],
    //     token_type: '',
    //     refresh_token: '',
    //     access_token: ''
    // })
    // useEffect(() => {
    //     let userData = localStorage.getItem('login_data')
    //     let loginData = JSON.parse(userData!)
    //     setLoginData(loginData)
    // }, []);

    return (
        <Layout className="app">
            <AppRouter />
        </Layout>
    );
}

export default App;

