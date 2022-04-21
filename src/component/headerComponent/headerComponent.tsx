import React, {FC} from 'react';
import {ExportOutlined, LeftOutlined, RightOutlined, UserOutlined} from '@ant-design/icons';
import './headerComponent.scss'
import {Avatar, Layout, Select} from "antd";
import {Translate} from "../../helpers/local";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {createdUserSlice} from "../../store/reducers/login";
import {useNavigate} from "react-router-dom";
import {RouterConstants} from "../../routing/routerConstants";
import {changeLangSlice} from '../../store/reducers/changeLang'
import {languageKeys, languageOptions} from "../../helpers/appConstants/languageKeys";

const {Option} = Select;

type HeaderProps = {
    collapsed: boolean,
    sidebarToggle: () => void
}

const HeaderComponent: FC<HeaderProps> = ({collapsed, sidebarToggle}) => {
    const currentLang = useAppSelector(state => state.changeLang.lang)
    const {userName} = useAppSelector(state => state.userLoginReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('login_data')
        dispatch(createdUserSlice.actions.createUser({
            access_token: '',
            refresh_token: '',
            scope: [],
            userName: '',
            isAuth: false,
            token_type: '',
        }))
        navigate(`/${RouterConstants.LOGIN_ROUTE}`)
    }

    const changeLanguage = (event: languageKeys) => {
        dispatch(changeLangSlice.actions.changeLanguage({lang: event}))
        console.log("currentLang", currentLang);

    }

    return (
        <Layout.Header className="site-layout-background header-component"
                       style={{
                           padding: 0,
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between',
                           width: '100%',
                           paddingRight: 20
                       }}>
            <div className='trigger sidebar-close-icon' onClick={() => sidebarToggle()} style={{
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
                {collapsed ? <RightOutlined/> : <LeftOutlined/>}
            </div>
            <div className='header-component__elements'>
                <div className='header-component__username'>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    <h5>{userName}</h5>
                </div>
                <div className='header-component__select-lang'>
                    <Select defaultValue={languageKeys.RU} style={{width: 120}} bordered={false}
                            onChange={(e) => changeLanguage(e)}>
                        {languageOptions.map(item =>
                            <Option key={item.key} value={item.value}>{item.label}</Option>
                        )}
                    </Select>
                </div>

                <div className='header-component__exit' onClick={() => logOut()}>
                    <Translate label="exit"/>
                    <ExportOutlined/>
                </div>

            </div>
        </Layout.Header>

    );
};

export default HeaderComponent;
