import React, {FC, useState} from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../../component/sidebar/sidebar";
import {Layout} from "antd";
import HeaderComponent from "../../component/headerComponent/headerComponent";

const Home: FC = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <>
            <Sidebar collapsed={collapsed}/>
            <Layout className='site-layout'>
                <HeaderComponent collapsed={collapsed} sidebarToggle={toggle}/>
                <Outlet/>
            </Layout>

        </>
    );
};

export default Home;
