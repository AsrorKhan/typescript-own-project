import React, {FC} from "react";

import {Layout, Menu,} from 'antd';
import {UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import {Link} from "react-router-dom";
import './sidebar.scss'


const {Sider} = Layout

interface Props {
    collapsed: boolean
}

const Sidebar: FC<Props> = ({collapsed}) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <Link to='users'>Users</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                    <Link to='todos'>Todos</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined/>}>
                    <Link to='posts'>Posts</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
