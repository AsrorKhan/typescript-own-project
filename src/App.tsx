import React from 'react';
import './App.scss';
import Sidebar from "./component/sidebar/sidebar";
import AppRouter from "./routing/appRouter";
import {Layout} from "antd";
import {useAppSelector} from "./hooks/redux";

function App() {
    const user = useAppSelector(state => state.userLoginReducer);

    return (
        <div className="App">
            <Layout>
                {user.isAuth && <Sidebar/>}
                <Layout.Content>
                    <AppRouter/>
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default App;

