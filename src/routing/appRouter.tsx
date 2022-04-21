import {Navigate, Route, Routes} from "react-router-dom";
import {protectedRoutes, publicRoutes} from "./routing";
import {useAppSelector} from "../hooks/redux";
import {RouterConstants} from "./routerConstants";
import Home from "../pages/home/home";


function AppRouter() {
    const user = useAppSelector(state => state.userLoginReducer);
    return (
        <Routes>
            {!user.isAuth && publicRoutes.map((route) =>
                (<Route key={route.path} element={route.component} path={route.path}/>)
            )}
            <Route path="/" element={<Home />}>
                {user.isAuth && protectedRoutes.map((route) =>
                    <Route key={route.path} element={route.component} path={route.path}/>
                )}
            </Route>
            {!user.isAuth && (<Route path='*' element={<Navigate to={`/${RouterConstants.LOGIN_ROUTE}`}/>}/>)}
        </Routes>
    )
}

export default AppRouter
