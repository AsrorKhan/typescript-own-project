import React from "react";

import {Layout, Menu} from 'antd';
import {LeftOutlined, RightOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import {Link} from "react-router-dom";
import AppRouter from "../../routing/appRouter";
const {Header, Sider, Content} = Layout;

class Sidebar extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <div className='trigger sidebar-close-icon' onClick={this.toggle} style={{
                            width: '30px',
                            height: '100%',
                            borderRadius: ' 0 10px 10px 0',
                            backgroundColor: '#001428',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#fff'
                        }}>
                            {this.state.collapsed ? <RightOutlined/> : <LeftOutlined/>}
                        </div>
                    </Header>
                </Layout>
            </Layout>
        );
    }
}

export default Sidebar
